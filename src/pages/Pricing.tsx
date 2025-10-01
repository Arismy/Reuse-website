import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$499",
      description: "Perfect for small projects and landing pages",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form",
        "1 Month Support",
        "Source Code Included",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,299",
      description: "Ideal for businesses and e-commerce sites",
      features: [
        "Everything in Basic",
        "Up to 15 Pages",
        "Advanced SEO Optimization",
        "CMS Integration",
        "E-commerce Functionality",
        "3 Months Support",
        "Performance Optimization",
        "Analytics Integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$2,999",
      description: "For complex applications and custom solutions",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Backend Development",
        "API Integration",
        "Advanced Security",
        "Database Design",
        "6 Months Support",
        "Priority Support",
        "Dedicated Project Manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include responsive design and clean code.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card p-8 hover-lift relative ${
                plan.popular ? "border-primary shadow-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="mt-20 text-center space-y-6">
          <Card className="glass-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a unique project in mind? Let's discuss your requirements and create a tailored plan that fits your needs and budget.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact for Custom Quote
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
