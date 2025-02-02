import { useState } from "react";
import hwlk from "../../../public/assets/images/hwlk.svg";
import nfaa from "../../../public/assets/images/nfaa.svg";
import ts from "../../../public/assets/images/ts.jpeg";
import Button from "../../components/Software-components/Button";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "IT & Hardware",
  "UI/UX Design",
  "Staff Augmentation",
  "Quality Assurance",
];

const cardsData = [
  {
    id: 1,
    category: "Web Development",
    src: hwlk,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.",
  },
  {
    id: 2,
    category: "UI/UX Design",
    src: nfaa,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.",
  },
  {
    id: 3,
    category: "IT & Hardware",
    src: ts,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.",
  },
  {
    id: 4,
    category: "UI/UX Design",
    src: hwlk,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.",
  },
  {
    id: 5,
    category: "Staff Augmentation",
    src: ts,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.",
  },
  {
    id: 6,
    category: "Mobile Development",
    src: hwlk,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region..",
  },
  {
    id: 7,
    category: "Mobile Development",
    src: nfaa,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region..",
  },
  {
    id: 8,
    category: "Quality Assurance",
    src: hwlk,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region..",
  },
  {
    id: 9,
    category: "Quality Assurance",
    src: ts,
    title: "clients",
    description:
      "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region..",
  },
];

export default function CardFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      {/* Navbar Links */}
      <div className="flex justify-center space-x-4 mb-6 px-[200px] flex-wrap ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mb-4 rounded-lg text-[white] font-bold transition-all ${
              selectedCategory === category
                ? "bg-primary"
                : " !border-primary text-[white] bg-white text-black border  rounded-[10px] hover:bg-primary hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards mb-[100px] flex  flex-wrap gap-4  justify-center">
        {filteredCards.map((card) => (
          <div className="card   w-[30%] bg-base-900 h-[500px] border-1 border border-stroke p-4">
            <figure>
              <img
                className="w-[405px] h-[382px] "
                src={card.src}
                alt={card.title}
              />
            </figure>
            <div className="flex-col items-start justify-start">
              <h2 className="text-[14px] text-primary font-mons font-[600] tracking-[1.6px] mb-2 ">
                {card.title}{" "}
              </h2>
              <div className="flex justify-center items-center ">
                <p className="font-mons text-[12px] text-secondary font-[500]">
                  {card.description}
                </p>
                <div className=" flex justify-end items-end mt-10 ps-6">
                  <Button type="linkBtnSm">See More</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
