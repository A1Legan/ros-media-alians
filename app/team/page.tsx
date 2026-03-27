"use client";

import Image from "next/image";
import Link from "next/link";

import Pentangle from "@/public/Pentangle.png";
import Ann from '@/public/Ann.jpg';
import Arrow from "@/public/Arrow.png";

import { useState } from "react";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    phone: string;
    category: "Руководство" | "Исполнительный совет" | "Попечительский совет";
};

const teamMembers: TeamMember[] = [
    {
    id: 1,
    name: "Вячеслав Леонидович Головков",
    role: "РосМедиа-Альянс",
    phone: "+7 495 230-35-57",
    category: "Руководство",
    },
    {
    id: 2,
    name: "Анна Сергеевна Ковалева",
    role: "Председатель исполнительного совета",
    phone: "+7 495 230-35-58",
    category: "Исполнительный совет",
    },
    {
    id: 3,
    name: "Дмитрий Андреевич Белов",
    role: "Заместитель председателя",
    phone: "+7 495 230-35-59",
    category: "Исполнительный совет",
    },
    {
    id: 4,
    name: "Елена Викторовна Морозова",
    role: "Член исполнительного совета",
    phone: "+7 495 230-35-60",
    category: "Исполнительный совет",
    },
    {
    id: 5,
    name: "Игорь Александрович Волков",
    role: "Председатель попечительского совета",
    phone: "+7 495 230-35-61",
    category: "Попечительский совет",
    },
    {
    id: 6,
    name: "Мария Петровна Соколова",
    role: "Член попечительского совета",
    phone: "+7 495 230-35-62",
    category: "Попечительский совет",
    },
    {
    id: 7,
    name: "Григорив Михайлович Солодков",
    role: "Зам. Директора",
    phone: "+7 495 230-35-63",
    category: "Руководство",
    },
];

const categories = ["Вся команда", "Руководство", "Исполнительный совет", "Попечительский совет"];

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>("Все");

  // Исправленная фильтрация
    const filteredMembers = teamMembers.filter((member) => {
        if (activeCategory === "Вся команда") return true;
        return member.category === activeCategory;
    });

  // Для заголовка блока
    const getDisplayTitle = () => {
        if (activeCategory === "Вся команда") return "Вся команда";
        return activeCategory;
    };
    return (
        <section className="flex flex-col ml-auto mr-auto max-w-336 gap-12 px-5
            lg:px-0"
        >
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>Команда</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">Команда</h2>
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
        <div className="flex flex-col flex-wrap items-center gap-4
            lg:flex-row lg:gap-6"
        >
            {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
                <div className="px-1
                    lg:w-[calc(25%-18px)] lg:h-150"
                    key={member.id}
                >
                    <Image className="rounded-2xl"
                    src={Ann}
                    alt=""/>
                    <div className="flex flex-col text-center justify-center ml-auto mr-auto mt-2
                        lg:w-70"
                    >
                        <p className="text-2xl">{member.name}</p>
                        <div className="opacity-50 mt-1">
                            <p className="text-xl">{member.role}</p>
                            <p className="text-md">{member.phone}</p>
                        </div>
                    </div>
                </div>
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