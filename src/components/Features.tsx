import { Brain, Zap, BarChart3, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "State-of-the-art machine learning models trained on diverse datasets",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time processing and instant results for your business needs",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Detailed insights and analytics to track your AI performance",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Enterprise-grade security to protect your sensitive data",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up opacity-0">
          Powerful Features for Modern Businesses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};