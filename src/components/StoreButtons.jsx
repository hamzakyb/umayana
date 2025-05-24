import React from "react";

const stores = [
  {
    name: "Trendyol Mağazamız",
    color: "#F27A1A",
    link: "https://www.trendyol.com/magaza/umay-ana-m-1085725?sst=0",
  },
  {
    name: "N11 Mağazamız",
    color: "#6C2DC7",
    link: "https://m.n11.com/magaza/umayana",
  },
  {
    name: "Hepsiburada Mağazamız",
    color: "#FFA500",
    link: "https://www.hepsiburada.com/magaza/umay-ana",
  },
];

const StoreButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 w-full">
  {stores.map((store, i) => (
    <a
      key={i}
      href={store.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 max-w-[90vw] text-center px-6 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition-transform"
      style={{ backgroundColor: store.color }}
    >
      {store.name}
    </a>
  ))}
</div>
  );
};

export default StoreButtons;