import { CheckCircle } from "lucide-react";

const reasons = [
  "Expertise technique approfondie",
  "Design moderne et personnalisé",
  "Support réactif et professionnel",
  "Solutions évolutives",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-webrands-dark">
            Pourquoi Choisir Webrands ?
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 text-lg"
              >
                <CheckCircle className="text-primary" size={24} />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;