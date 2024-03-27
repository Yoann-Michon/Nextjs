"use client"

import Image from "next/image";
import cutie from "../assets/img/cute_teddy_bear.png";
import evil from "../assets/img/evil_teddy_bear.png";
import demon from "../assets/img/demon_teddy_bear.png";
import { useState } from 'react'

const items = [
  { image: cutie, name: "cutest teddy bear" },
  { image: evil, name: "evilest teddy bear" },
  { image: demon, name: "demoniac teddy bear" },
];

export default function Caroussel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Carousel</h1>
        <div
          id="default-carousel"
          className="relative w-full carousel rounded-box overflow-hidden flex"
          data-carousel="slide"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full my-2 gap-2">
          {items.map((_, index) => (
            <a
              key={index}
              href={`#item${index + 1}`}
              className="btn btn-xs rounded-full bg-slate-300 w-5 h-5 flex items-center justify-center text-black"
              onClick={() => setCurrentSlide(index)}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
