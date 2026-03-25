
'use client';

import { useEffect, useState } from 'react';

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/Logo.png";
import Enter from "@/public/Enter.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={
            `flex justify-center top-0 left-0 right-0 sticky py-4 z-50
            ${isScrolled
                ? `bg-black/50 backdrop-blur-md`
                : `bg-transparent`
            }`
        }>
            <div className='flex justify-between items-center container'>
                <Link 
                href="/">
                    <Image 
                    src={Logo}
                    width={209}
                    alt="Logo"/>
                </Link>
                <div className="flex gap-6">
                    <Link href="about">О нас</Link>
                    <Link href="project">Проекты</Link>
                    <Link href="#">Партнёры</Link>
                    <Link href="#">Контакты</Link>
                    <Link href="#">Команда</Link>
                </div>
                <Link href="contacts" className="flex gap-2 bg-white text-[#0B0E1D] px-5 py-2 rounded-xl items-center">
                    <Image 
                    src={Enter}
                    width={18}
                    alt="Enter"/>
                    Стать участником
                </Link>
            </div>
        </header>
    );
}