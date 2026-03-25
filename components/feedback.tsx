'use client';
import { useState } from 'react';

import Image from 'next/image';

import Pentangle from "@/public/Pentangle.png";

import Comment from '@/components/comment';

interface ImageCarouselProps {
    images: (string | object)[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;
    const maxIndex = Math.max(0, images.length - slidesToShow);
    const canGoNext = currentIndex < maxIndex;
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
    return (
        <section className="flex flex-col items-start max-w-350 ml-auto mr-auto mt-20">
        <div className="flex items-center gap-2 text-2xl">
            <Image
            src={Pentangle}
            width={16}
            alt="Li"/>
            <h2>Проекты</h2>
        </div>
        <div className="relative max-w-full mx-auto overflow-hidden py-20">
        <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
            }}
        >
            {images.map((i, index) => (
            <div
                key={index}
                className="shrink-0 w-1/3 px-2"
            >
                <Comment />
            </div>
            ))}
        </div>
        </div>
        <div className="flex flex-row w-full justify-end">
        <div className='flex gap-2'>
            <button
                onClick={goToPrev}
                disabled={!canGoPrev}
                className={`transform py-3 px-5 rounded-full shadow-lg transition-colors
                ${canGoPrev
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }`}
            >
                ‹
            </button>
            <button
                onClick={goToNext}
                disabled={!canGoNext}
                className={`transform py-3 px-5 rounded-full shadow-lg transition-colors
                ${canGoNext
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }`}
            >
                ›
            </button>
        </div>
        </div>
        </section>
    );
}