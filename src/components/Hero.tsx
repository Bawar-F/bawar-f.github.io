import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-gray-100">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(277,75%,84%,1)_0%,hsla(297,50%,51%,1)_100%)] opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6 animate-float">
            Next-Gen AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Revolutionize your business with cutting-edge artificial intelligence. 
            Transform data into actionable insights with our powerful AI platform.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
