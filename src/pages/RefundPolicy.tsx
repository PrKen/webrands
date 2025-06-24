import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-primary border-b pb-4">Refund Policy</h1>

        <p>
          Due to the customized and digital nature of our services, all sales are final once a quote is signed or a
          payment is processed. No refunds are available.
        </p>

        <p>
          Refund requests may be considered in exceptional cases involving a proven technical error on our part. To
          submit a request, contact us at{" "}
          <a href="mailto:contact@webrandsagency.com" className="underline text-primary">
            contact@webrandsagency.com
          </a>{" "}
          within 7 days of your purchase.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
