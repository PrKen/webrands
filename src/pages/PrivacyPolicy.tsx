import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold border-b pb-4">Privacy Policy</h1>

        <p>
          This Privacy Policy explains how Webrands LLC (“we”, “our”, or “us”) collects, uses, and safeguards your
          information when you visit or use our website, www.webrandsagency.com .
        </p>

        <div className="space-y-1 text-muted-foreground">
          <p><strong>Company:</strong> Webrands LLC</p>
          <p>102 Gold Ave SW PMB 162, Albuquerque, NM 87102, USA</p>
          <p>Email: <a href="mailto:team.peaccy@outlook.fr" className="underline text-primary">team.peaccy@outlook.fr</a></p>
          <p>Phone: +1</p>
          <p>EIN: 98-1865465</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">1. What Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal data: name, email address, phone number</li>
            <li>Technical data: IP address, browser type, visited pages</li>
            <li>Service-related data: quote requests, contracts, billing information</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To manage and deliver our digital agency services</li>
            <li>To run marketing campaigns and manage social media</li>
            <li>To enhance website user experience</li>
            <li>To communicate with you regarding your services or updates</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">3. Sharing Your Information</h2>
          <p>We may share your data with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Payment processors (Stripe, Wise, Revolut)</li>
            <li>Hosting and marketing platform providers (Lovable, email tools, analytics)</li>
            <li>Authorities, where required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">4. Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, correct, or delete your data. Contact us at{' '}
            <a href="mailto:team.peaccy@outlook.fr" className="underline text-primary">team.peaccy@outlook.fr</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">5. Cookies</h2>
          <p>We use cookies to analyze website traffic and improve user experience on www.webrandsagency.com .</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
