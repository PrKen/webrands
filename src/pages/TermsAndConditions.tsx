import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-primary border-b pb-4">Terms & Conditions</h1>

        <p>
          By accessing or using www.webrandsagency.com, you agree to the following terms governing our digital agency services.
        </p>

        <div className="space-y-1 text-muted-foreground">
          <p><strong>Company:</strong> Webrands LLC</p>
          <p>102 Gold Ave SW 162, Albuquerque, NM 87102, USA</p>
          <p><strong>Personal address:</strong> 66 Avenue d’Ivry, Paris, 75013, France</p>
          <p>Email: <a href="mailto:contact@webrandsagency.com" className="underline text-primary">contact@webrandsagency.com</a></p>
          <p>Phone: +1 505 523 1391</p>
          <p>EIN: 98-1865465</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary text-primary mt-8 mb-2">1. Services Offered</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Creation of high-performance, secure e-commerce websites</li>
            <li>Digital marketing and social media management</li>
            <li>Web presence management and digital strategy consulting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">2. Contracts and Payments</h2>
          <p>
            Each service requires a signed quote or contract. Payments are made through secure external providers. You must
            provide accurate information for billing and service delivery.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">3. Intellectual Property</h2>
          <p>
            All content created (design, code, text, visuals) remains the property of Webrands LLC until full payment is received.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">4. Liability Disclaimer</h2>
          <p>
            We strive for quality, but results may vary based on your business and compliance. You are responsible for
            implementing and following our recommendations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">5. Governing Law</h2>
          <p>These terms are governed by the laws of the State of New Mexico, USA.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
