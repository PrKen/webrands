import React from "react";

const DeliveryPolicy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-primary border-b pb-4">Delivery Policy</h1>

        <p>
          Our digital deliverables—including websites, marketing strategies, and resource files—are delivered in
          accordance with the timelines outlined in your contract.
        </p>

        <p>
          Access to deliverables is granted via email or through a dedicated platform, as specified in your agreement
          with us.
        </p>
      </div>
    </section>
  );
};

export default DeliveryPolicy;
