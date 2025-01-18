import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Easily integrate your existing data sources with our secure API",
  },
  {
    number: "02",
    title: "Train AI Models",
    description: "Our AI automatically learns from your data to create custom solutions",
  },
  {
    number: "03",
    title: "Get Results",
    description: "Receive actionable insights and automate your workflows",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-8 mb-12 last:mb-0"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};