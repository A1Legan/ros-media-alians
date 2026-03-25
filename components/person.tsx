'use client';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Arrow from "@/public/Arrow.png";
import Pentangle from "@/public/Pentangle.png";

import People from '@/components/people';

interface ImageCarouselProps {
    images: (string | object)[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 4;
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
            <h2>Команда</h2>
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
                className="shrink-0 w-1/4 px-2"
            >
                <People />
            </div>
            ))}
        </div>
        </div>
        <div className="flex flex-row w-full justify-between">
        <Link href="#" className="flex gap-2 items-center"><p className="opacity-50">Смотреть всю команду</p>
        <Image 
        src={Arrow}
        width={20}
        alt="Arrow"/></Link>
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