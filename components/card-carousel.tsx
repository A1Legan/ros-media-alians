'use client';

import { useState } from 'react';

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const canGoNext = currentIndex < images.length - 1;
    const canGoPrev = currentIndex > 0;

    const goToNext = () => {
        if (canGoNext) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const goToPrev = () => {
        if (canGoPrev) {
        setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative max-w-full mx-auto overflow-hidden">
        <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {images.map((src, index) => (
            <div key={index} className="flex min-w-full shrink-0">
                <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
                />
            </div>
            ))}
        </div>
        <div className='flex justify-center items-center gap-6 mt-2'>
        <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`px-2 rounded-full
            ${canGoPrev
                ? 'bg-transparent hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer'
                : 'bg-transparent text-gray-500 cursor-not-allowed'
            }`}
        >
            ‹
        </button>
        <div className="flex gap-2">
            {images.map((_, index) => {
            const isActive = index === currentIndex;
            return (
                <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isActive}
                className={`w-3 h-3 rounded-full ${
                    isActive
                    ? 'bg-blue-500'
                    : 'bg-white/50 hover:bg-white'
                } transition-colors ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                />
            );
            })}
        </div>
        <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`px-2 rounded-full
            ${canGoNext
                ? 'bg-transparent hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer'
                : 'bg-transparent text-gray-500 cursor-not-allowed'
            }`}
        >
            ›
        </button>
        </div>
        
        </div>
    );
    }
