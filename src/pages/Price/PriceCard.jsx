import React from "react";

const PriceCard = ({ priceType }) => {
  const { services, price } = priceType;
  console.log(services);
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 ${
        price === 49
          ? "bg-[#e0f2f1]"
          : price === 99
          ? "bg-[#66b5e9]"
          : "bg-[#cc7eee]"
      } py-5 rounded-2xl px-4`}
    >
      <h1 className="text-xl font-bold">Lite</h1>
      <p>
        <span className="text-4xl">${price}</span>/mo
      </p>
      <div className=" w-full list-none text-center space-y-4 font-semibold">
        {services.map(({ name, available }) => (
          <li className={`${available ? "" : "line-through"} `} key={name}>
            {name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
