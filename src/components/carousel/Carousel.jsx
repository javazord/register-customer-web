import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = [
    "/assets/home.jpg",
    "/assets/register.jpg",
    "/assets/list.jpg",
    "/assets/about1.jpg",
    "/assets/about2.jpg",
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📷 Screen Capture
          </h2>

          <div className="relative w-full overflow-hidden rounded-xl shadow-md">
            <img
              src={screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="w-full object-cover transition duration-300"
            />

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white rounded-full p-2 shadow-md"
            >
              <ArrowLongLeftIcon className="block size-6 group-data-[open]:hidden" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white rounded-full p-2 shadow-md"
            >
              <ArrowLongRightIcon className="block size-6 group-data-[open]:hidden" />
            </button>
          </div>

          <div className="mt-2 text-sm text-center text-gray-500">
            {currentIndex + 1} of {screenshots.length}
          </div>
        </section>
      </div>
    </div>
  );
}
