'use client';

import { useState } from 'react';

interface ImageCarouselProps {
    images: string[];
}

import Image from "next/image";
import Link from "next/link";

import Pentangle from "@/public/Pentangle.png";
import Cover from "@/public/Project.jpg";
import Arrow from "@/public/Arrow.png";

import Project from "@/components/project";
import ImageCarousel from '@/components/card-carousel';


export default function Home() {
    const images = [
    '../Project.jpg',
    '../Project.jpg',
    '../Project.jpg',
    '../Project.jpg'
    ];
    return (
        <section className="flex flex-col ml-auto mr-auto max-w-336 gap-12 px-5 my-10
            lg:px-0"
        >
            <div>
                <div className="flex items-center gap-2">
                    <Link href="/" className="opacity-50">Главная</Link>
                    <Image className="opacity-50"
                    src={Pentangle}
                    width={8}
                    alt="Pentangle"/>
                    <Link href="project" className="opacity-50">Проекты</Link>
                    <Image className="opacity-50"
                    src={Pentangle}
                    width={8}
                    alt="Pentangle"/>
                    <p>Название проекта</p>
                </div>
                <h2 className="flex items-center gap-2 text-4xl">Название проекта</h2>
            </div>
            <div className="flex flex-col justify-between gap-6
                lg:flex-row"
            >
                <div className="flex flex-col
                    lg:w-1/2"
                >
                    <ImageCarousel images={images} />
                </div>
                <div className="flex flex-col gap-3
                    lg:w-1/2"
                >
                    <h3 className="text-3xl">Описание проекта</h3>
                    <p className="text-lg opacity-50">Lorem ipsum dolor sit amet consectetur. Adipiscing elit malesuada felis vitae fringilla dignissim at ac. Amet ultricies pretium vitae pharetra neque mattis amet tempor. Sit hendrerit magna ac tortor elementum mauris posuere. Mauris erat tortor elit aliquet in eros vitae purus cursus. Leo fringilla nunc ultricies turpis elit neque id. Bibendum ultrices risus vel sit arcu consectetur.<br />Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa. Molestie lorem scelerisque suspendisse ornare donec lacinia quam. Tincidunt sem metus vitae congue scelerisque urna. agna.Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa.</p>
                </div>
            </div>
            <div>
                <h3 className="text-3xl">Подробнее о проекте</h3>
                <p className="text-lg opacity-50">Lorem ipsum dolor sit amet consectetur. Adipiscing elit malesuada felis vitae fringilla dignissim at ac. Amet ultricies pretium vitae pharetra neque mattis amet tempor. Sit hendrerit magna ac tortor elementum mauris posuere. Mauris erat tortor elit aliquet in eros vitae purus cursus. Leo fringilla nunc ultricies turpis elit neque id. Bibendum ultrices risus vel sit arcu consectetur.<br />Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa. Molestie lorem scelerisque suspendisse ornare donec lacinia quam. Tincidunt sem metus vitae congue scelerisque urna. agna.Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa.</p>
            </div>
            <Image className="w-full"
            src={Cover}
            alt='Logo'/>
            <p className="text-lg opacity-50">Lorem ipsum dolor sit amet consectetur. Adipiscing elit malesuada felis vitae fringilla dignissim at ac. Amet ultricies pretium vitae pharetra neque mattis amet tempor. Sit hendrerit magna ac tortor elementum mauris posuere. Mauris erat tortor elit aliquet in eros vitae purus cursus. Leo fringilla nunc ultricies turpis elit neque id. Bibendum ultrices risus vel sit arcu consectetur.<br />Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa. Molestie lorem scelerisque suspendisse ornare donec lacinia quam. Tincidunt sem metus vitae congue scelerisque urna. agna.Ut nisl lobortis arcu lobortis facilisis risus. Ullamcorper mauris arcu interdum velit egestas. Lacinia ultrices tristique purus non malesuada tortor faucibus in tempus. Tempus volutpat habitant elit in massa.</p>
        <div className="flex flex-col gap-12">
            <div className="flex items-center gap-2 text-2xl">
                <Image
                src={Pentangle}
                width={16}
                alt="Li"/>
                <h2 className="mt-1">Похожие проекты</h2>
            </div>
            <div className="flex gap-4">
                <Project />
                <div className="hidden gap-4
                    lg:flex"
                >
                    <Project />
                    <Project />
                </div>
            </div>
            <Link href="project" className="flex gap-2 items-center justify-center">
                <p className="opacity-50">Смотреть все проекты</p>
                <Image 
                src={Arrow}
                width={20}
                alt="Arrow"/>
            </Link>
        </div>
        </section>
    );
};