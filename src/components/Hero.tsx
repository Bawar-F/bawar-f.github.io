import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container px-4 py-32 animate-fade-up">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Transform Your Business with AI
          </h1>
          <p className="text-xl text-gray-600">
            Harness the power of artificial intelligence to streamline operations,
            boost productivity, and drive innovation across your organization.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};