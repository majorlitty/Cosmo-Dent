'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { UploadCloud, Sparkles, Loader2, ArrowRight, RefreshCcw } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const treatments = [
  { 
    id: 'veneers', 
    label: 'Porcelain Veneers', 
    prompt: 'Edit the image to give the person perfectly straight, bright white porcelain veneers. Make the smile look flawless, symmetrical, and natural.' 
  },
  { 
    id: 'whitening', 
    label: 'Professional Whitening', 
    prompt: 'Edit the image to professionally whiten the person\'s teeth, removing any stains and making them a bright, natural white.' 
  },
  { 
    id: 'makeover', 
    label: 'Smile Makeover', 
    prompt: 'Edit the image to provide a complete cosmetic dental smile makeover, with perfectly aligned, bright white teeth and improved facial harmony.' 
  },
];

export default function SmileVisualizer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [simulatedImage, setSimulatedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImage(reader.result as string);
      setSimulatedImage(null); // Reset simulation on new upload
    };
    reader.readAsDataURL(file);
  };

  const handleSimulate = async () => {
    if (!originalImage) return;
    setIsGenerating(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
      const base64Data = originalImage.split(',')[1];
      const mimeType = originalImage.match(/data:(.*?);/)?.[1] || 'image/jpeg';

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType } },
            { text: selectedTreatment.prompt }
          ]
        }
      });

      let newImageUrl = null;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          newImageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
          break;
        }
      }

      if (newImageUrl) {
        setSimulatedImage(newImageUrl);
      } else {
        console.error("No image returned from Gemini");
        alert("Failed to generate simulation. Please try again.");
      }
    } catch (error) {
      console.error("Error generating simulation:", error);
      alert("An error occurred during simulation. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    setOriginalImage(null);
    setSimulatedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-[#FDFBF7] rounded-[2rem] border border-[#E5E0D8] p-6 md:p-10 shadow-xl shadow-[#C5A059]/5">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif text-[#1A1A1A] mb-3">Interactive Smile Visualizer</h3>
        <p className="text-[#7A7A7A] font-light max-w-xl mx-auto">
          Upload a selfie and let our AI preview your potential smile transformation. See the difference before you even book a consultation.
        </p>
      </div>

      {!originalImage ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-[#E5E0D8] rounded-2xl p-12 text-center cursor-pointer hover:border-[#C5A059] hover:bg-white transition-all bg-white"
        >
          <UploadCloud className="mx-auto text-[#C5A059] mb-4" size={48} />
          <p className="text-[#1A1A1A] font-medium mb-2">Click to upload a selfie</p>
          <p className="text-[#7A7A7A] text-sm">JPEG or PNG, well-lit face showing your teeth</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {/* Original Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#E5E0D8]">
              <Image src={originalImage} alt="Original" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* Simulated Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white flex items-center justify-center border border-[#E5E0D8]">
              {isGenerating ? (
                <div className="flex flex-col items-center text-[#C5A059]">
                  <Loader2 className="animate-spin mb-4" size={40} />
                  <p className="text-sm font-medium animate-pulse text-[#1A1A1A]">Designing your smile...</p>
                </div>
              ) : simulatedImage ? (
                <>
                  <Image src={simulatedImage} alt="Simulated" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#C5A059]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    After
                  </div>
                </>
              ) : (
                <div className="text-center p-6">
                  <Sparkles className="mx-auto text-[#E5E0D8] mb-3" size={32} />
                  <p className="text-[#7A7A7A] text-sm">Your new smile will appear here</p>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h4 className="text-lg font-serif text-[#1A1A1A] mb-4">Select Treatment</h4>
            <div className="space-y-3 mb-8">
              {treatments.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTreatment(t)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                    selectedTreatment.id === t.id
                      ? 'border-[#C5A059] bg-white shadow-sm'
                      : 'border-[#E5E0D8] bg-white/50 hover:border-[#C5A059]/50 hover:bg-white'
                  }`}
                >
                  <p className={`font-medium ${selectedTreatment.id === t.id ? 'text-[#C5A059]' : 'text-[#1A1A1A]'}`}>
                    {t.label}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={handleSimulate}
              disabled={isGenerating}
              className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#C5A059] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-4 shadow-lg shadow-transparent hover:shadow-[#C5A059]/20"
            >
              {isGenerating ? 'Processing...' : 'Simulate Transformation'}
              {!isGenerating && <ArrowRight size={18} />}
            </button>

            <button
              onClick={reset}
              disabled={isGenerating}
              className="w-full bg-transparent text-[#1A1A1A] border border-[#E5E0D8] py-4 rounded-xl font-medium hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCcw size={18} />
              Start Over
            </button>
          </div>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/jpeg, image/png, image/webp"
        className="hidden"
      />
    </div>
  );
}
