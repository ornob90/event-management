import React from "react";
import Container from "../../components/Shared/Container";
import prices from "./price-data";
import SectionHeader from "../../components/Shared/SectionHeader";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <Container className="mx-auto mb-16">
      <SectionHeader title="Our Pricing" />
      <p
        data-aos="fade-right"
        className="text-center text-lg font-medium mb-10"
      >
        Choose the Plan That Fits Your Needs and Budget
      </p>
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {prices.map((priceType) => (
          <PriceCard key={priceType.price} priceType={priceType} />
        ))}
      </div>
    </Container>
  );
};

export default Price;
