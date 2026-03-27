"use client";

import Image from "next/image";
import Link from "next/link";

import Pentangle from "@/public/Pentangle.png";
import Create from "@/public/Create.png";
import Cover from "@/public/Project.jpg";
import Arrow from "@/public/Arrow.png";

import { useState } from "react";

type TeamMember = {
    id: number;
    name: string;
    desc: string;
    category: "Архив" | "Проект в работе";
};

const teamMembers: TeamMember[] = [
    {
    id: 1,
    name: "Название проекта",
    desc: "Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...",
    category: "Проект в работе",
    },
    {
    id: 2,
    name: "Анна Сергеевна Ковалева",
    desc: "Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...",
    category: "Проект в работе",
    },
    {
    id: 3,
    name: "Дмитрий Андреевич Белов",
    desc: "Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...",
    category: "Архив",
    },
    {
    id: 4,
    name: "Елена Викторовна Морозова",
    desc: "Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...",
    category: "Архив",
    }
];

const categories = ["Все", "Проект в работе", "Архив"];

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>("Все");

  // Исправленная фильтрация
    const filteredMembers = teamMembers.filter((member) => {
        if (activeCategory === "Все") return true;
        return member.category === activeCategory;
    });

  // Для заголовка блока
    const getDisplayTitle = () => {
        if (activeCategory === "Все") return "Все";
        return activeCategory;
    };
    return (
        <section className="flex flex-col ml-auto mr-auto max-w-336 gap-12">
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>Проекты</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">Проекты</h2>
        </div>
        <div>
            <div className="flex gap-3 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-xl font-medium transition-all ${
                        activeCategory === category
                            ? "bg-[#0074FF] text-white hover:bg-blue-800"
                            : "bg-white/5 text-white/50 shadow-md"
                    }`}>
                        {category}
                    </button>
                ))}
            </div> 
        </div>
        <div className="flex flex-wrap gap-6">
            {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
                <Link href="card" className="
                    flex flex-col bg-linear-to-b from-white/5 to-white/4 rounded-[16] py-4 px-4 ring-2 ring-white/0 shadow-md
                    hover:ring-[#0074FF] hover:shadow-[#0074FF]"
                key={member.id}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src={Create}
                            width={20}
                            alt="Create"
                        />
                        <p className="mt-1">{member.category}</p>
                    </div>
                    <hr className="border border-dashed opacity-25" />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mt-4">Название проекта</h3>
                        <Image 
                            src={Cover}
                            width={628}
                            alt="Project"
                        />
                        <p className="opacity-75 max-w-100">{member.desc}</p>
                    </div>
                </Link>
            ))
        ) : (
            <div className="px-6 py-8 text-center text-gray-500">
                Нет проектов в этой категории
            </div>
        )}
        </div>
        <Link href="#" className="flex gap-2 items-center justify-center">
                <p className="opacity-50">Показать ещё</p>
                <Image 
                src={Arrow}
                width={20}
                alt="Arrow"/>
            </Link>
    </section>
    );
};