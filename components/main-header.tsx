
'use client';

import { useEffect, useState } from 'react';

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/Logo.png";
import Enter from "@/public/Enter.png";
import Menu from "@/public/menu.png";
import Close from "@/public/x.png"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    
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
            `flex max-w-110 justify-between px-4 top-0 left-auto right-auto sticky py-4 z-101
            lg:justify-center lg:max-w-full
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
                <div className="hidden lg:flex gap-6">
                    <Link href="about" className='hover:underline'>О нас</Link>
                    <Link href="project" className='hover:underline'>Проекты</Link>
                    <Link href="partners" className='hover:underline'>Партнёры</Link>
                    <Link href="contacts" className='hover:underline'>Контакты</Link>
                    <Link href="team" className='hover:underline'>Команда</Link>
                </div>
                <Link href="contacts" className="hidden lg:flex gap-2 bg-white text-[#0B0E1D] px-5 py-2 rounded-xl items-center">
                    <Image 
                    src={Enter}
                    width={18}
                    alt="Enter"/>
                    Стать участником
                </Link>
                <button className='bg-white p-2 rounded-lg
                    lg:hidden'
                    onClick={toggleMobileMenu}
                >
                    <Image
                        src={Menu}
                        width={24}
                        alt=''
                    />
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-linear-to-r from-[#010B17] to-[#051932] z-50
                    lg:hidden"
                >
                    <div className="flex flex-col h-full p-4">
                        <div className="flex justify-between items-center mb-8">
                            <Image
                            src={Logo}
                            alt=''
                            />
                            <button
                                onClick={toggleMobileMenu}
                                className='bg-white p-2 rounded-lg'
                            >
                                <Image
                                    src={Close}
                                    width={24}
                                    alt=''
                                />
                            </button>
                        </div>
                        <div className='flex flex-col h-screen justify-between'>
                            <div className='flex flex-col text-xl gap-6'>
                                <Link href='about' className='hover:underline'>О нас</Link>
                                <Link href='project' className='hover:underline'>Проекты</Link>
                                <Link href='partners' className='hover:underline'>Партнёрам</Link>
                                <Link href='team' className='hover:underline'>Участникам</Link>
                                <Link href='contacts' className='hover:underline'>Контакты</Link>
                            </div>
                            <Link href="contacts" className="flex gap-2 bg-white text-[#0B0E1D] px-5 py-3 rounded-xl items-center">
                                <Image 
                                    src={Enter}
                                    width={18}
                                    alt="Enter"
                                />
                                Стать участником
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}``