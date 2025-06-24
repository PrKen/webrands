import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-bold text-primary border-b pb-4 mb-6">About Webrands</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Webrands is a digital agency specializing in custom website creation and online advertising campaign
            management. Based in the United States and built for modern entrepreneurs, our mission is to help businesses
            gain visibility, attract more clients, and grow through digital tools.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">What We Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            We design elegant, high-performing showcase and e-commerce websites tailored to each client’s needs, while also
            offering strategic support to boost their online presence through social media advertising (Meta Ads, TikTok Ads,
            Google, etc.).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Our Core Services</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Custom website & e-commerce development</li>
            <li>Digital advertising (Meta Ads, TikTok Ads, Google Ads)</li>
            <li>Branding & visual identity</li>
            <li>SEO (Search Engine Optimization)</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
