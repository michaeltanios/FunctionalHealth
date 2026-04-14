import React, { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Image as ImageIcon, Sparkles, Download, RefreshCw, Key, Upload, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function MediaLab() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("create");

  useEffect(() => {
    window.scrollTo(0, 0);
    checkKey();
  }, []);

  const checkKey = async () => {
    if (window.aistudio) {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const generateImage = async () => {
    if (!prompt.trim() && activeTab === "create") return;
    if (!selectedFile && activeTab === "edit") return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let contents: any;

      if (activeTab === "create") {
        contents = {
          parts: [
            {
              text: `A high-quality, professional, clinical-grade medical image for a health brand called FunctionalHealth. The image should be: ${prompt}. Style: Clean, modern, high-end medical photography, soft natural lighting, trustworthy, professional.`,
            },
          ],
        };
      } else {
        const base64Data = await fileToBase64(selectedFile!);
        contents = {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: selectedFile!.type,
              },
            },
            {
              text: `Modify this medical image for FunctionalHealth. Instructions: ${prompt || "Enhance the clinical quality and professional aesthetic."}. Maintain the original context but improve the professional lighting and clinical detail.`,
            },
          ],
        };
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents,
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("No image was generated in the response.");
      }
    } catch (err: any) {
      console.error("Generation error:", err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("API Key error. Please re-select your API key.");
        setHasKey(false);
      } else {
        setError(err.message || "An unexpected error occurred during generation.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-10">
            <img 
              src="/logo.png" 
              alt="FunctionalHealth Logo" 
              className="h-40 md:h-60 w-auto mx-auto drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <Badge variant="outline" className="rounded-full px-6 py-2 border-functional-green/20 text-functional-green flex items-center gap-2 w-fit mx-auto bg-functional-green/5">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">AI Design Studio</span>
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-functional-green">Media Lab</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Generate custom, clinically-relevant imagery for FunctionalHealth using advanced AI.
            </p>
          </div>

          {!hasKey ? (
            <Card className="border-dashed border-2 bg-pathway/30">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-functional-green/10 flex items-center justify-center mx-auto">
                  <Key className="text-functional-green" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-functional-green">API Key Required</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    To use the high-quality image generation and editing models, you must select an API key from a paid Google Cloud project.
                  </p>
                </div>
                <Button onClick={handleSelectKey} className="rounded-full px-8 bg-functional-green hover:bg-functional-green/90">
                  Select API Key
                </Button>
                <p className="text-[10px] text-muted-foreground">
                  Learn more about <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-functional-green">Gemini API billing</a>.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <Tabs defaultValue="create" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8 rounded-full h-12 p-1 bg-muted/50">
                  <TabsTrigger value="create" className="rounded-full flex items-center gap-2 data-[state=active]:bg-functional-green data-[state=active]:text-white">
                    <Sparkles size={16} />
                    Create
                  </TabsTrigger>
                  <TabsTrigger value="edit" className="rounded-full flex items-center gap-2 data-[state=active]:bg-functional-green data-[state=active]:text-white">
                    <Wand2 size={16} />
                    Edit
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="create" className="space-y-8">
                  <Card className="shadow-lg border-functional-green/10">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-functional-green">Image Generator</CardTitle>
                      <CardDescription>Describe the clinical or lifestyle scene you want to create.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Input 
                          placeholder="e.g., A professional physical therapist working with an active senior in a bright, modern clinic..." 
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="flex-grow rounded-xl h-12 focus-visible:ring-functional-green"
                          disabled={isGenerating}
                        />
                        <Button 
                          onClick={generateImage} 
                          disabled={isGenerating || !prompt.trim()}
                          className="rounded-xl h-12 px-8 shrink-0 bg-functional-green hover:bg-functional-green/90"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Generate
                            </>
                          )}
                        </Button>
                      </div>
                      {error && (
                        <p className="text-sm text-destructive font-medium bg-destructive/5 p-3 rounded-lg border border-destructive/20">
                          {error}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="edit" className="space-y-8">
                  <Card className="shadow-lg border-functional-green/10">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-functional-green">Image Editor</CardTitle>
                      <CardDescription>Upload an image and describe the changes you'd like to make.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div 
                            className={`aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-colors relative overflow-hidden ${
                              previewUrl ? 'border-functional-green/50 bg-functional-green/5' : 'border-muted-foreground/20 hover:border-functional-green/30 bg-muted/5'
                            }`}
                          >
                            {previewUrl ? (
                              <>
                                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <Button variant="secondary" size="sm" onClick={() => document.getElementById('file-upload')?.click()}>
                                    Change Image
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <div className="text-center p-6 space-y-2">
                                <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
                                <p className="text-sm font-medium text-functional-green">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or WEBP (max 5MB)</p>
                              </div>
                            )}
                            <input 
                              id="file-upload" 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                            {!previewUrl && (
                              <button 
                                className="absolute inset-0 w-full h-full cursor-pointer"
                                onClick={() => document.getElementById('file-upload')?.click()}
                              />
                            )}
                          </div>
                        </div>
                        <div className="space-y-4 flex flex-col justify-center">
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Instructions</label>
                            <Input 
                              placeholder="e.g., Add more clinical detail to the background..." 
                              value={prompt}
                              onChange={(e) => setPrompt(e.target.value)}
                              className="rounded-xl h-12 focus-visible:ring-functional-green"
                              disabled={isGenerating}
                            />
                          </div>
                          <Button 
                            onClick={generateImage} 
                            disabled={isGenerating || !selectedFile}
                            className="rounded-xl h-12 w-full bg-functional-green hover:bg-functional-green/90"
                          >
                            {isGenerating ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Wand2 className="mr-2 h-4 w-4" />
                                Apply Changes
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                      {error && (
                        <p className="text-sm text-destructive font-medium bg-destructive/5 p-3 rounded-lg border border-destructive/20">
                          {error}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <AnimatePresence mode="wait">
                {generatedImage ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <Card className="overflow-hidden border-none shadow-2xl bg-muted">
                      <div className="aspect-video relative group">
                        <img 
                          src={generatedImage} 
                          alt="Generated clinical asset" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <Button variant="secondary" className="rounded-full" onClick={() => window.open(generatedImage, '_blank')}>
                            <Download className="mr-2 h-4 w-4" />
                            Open Full Size
                          </Button>
                          <Button variant="secondary" className="rounded-full" onClick={generateImage}>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Regenerate
                          </Button>
                        </div>
                      </div>
                    </Card>
                    <div className="flex justify-between items-center bg-pathway p-4 rounded-2xl border border-functional-green/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-functional-green/10 flex items-center justify-center">
                          <ImageIcon className="text-functional-green" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-functional-green">Asset Generated Successfully</p>
                          <p className="text-xs text-muted-foreground">1024 x 576 • PNG Format</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full border-functional-green/20 text-functional-green hover:bg-functional-green/5" onClick={() => setGeneratedImage(null)}>
                        Clear
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  !isGenerating && (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="aspect-video rounded-[40px] border-2 border-dashed border-functional-green/10 flex flex-col items-center justify-center text-muted-foreground space-y-4 bg-pathway/20"
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <ImageIcon size={32} className="opacity-20 text-functional-green" />
                      </div>
                      <p className="text-sm font-medium text-functional-green/60">Your generated image will appear here</p>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { title: "Clinical Context", desc: "AI is tuned to prioritize medical accuracy and professional aesthetics." },
              { title: "High Resolution", desc: "Generates 1K assets suitable for web hero sections and social media." },
              { title: "Brand Consistent", desc: "Prompts are automatically enhanced to match FunctionalHealth's visual identity." }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-serif font-bold text-functional-green">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
