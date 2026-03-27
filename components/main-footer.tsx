'use client';

const CopyButton = () => (
    <button
        onClick={() => navigator.clipboard.writeText('mr.humanities@mail.ru')}
        className="text-white text-2xl cursor-pointer underline underline-offset-4 transition duration-500 hover:text-[#0074FF]"
    >
        mr.humanities@mail.ru
    </button>
);

import Image from 'next/image';
import Link from 'next/link';

import LunarWeb from '@/public/LunarWeb.svg';
import Logo from "@/public/Logo.png";

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center max-w-366 ml-auto mr-auto gap-12 py-12'>
            <hr className='opacity-10'/>
            <div className='flex flex-col justify-between px-5 gap-8
                lg:flex-row lg:px-0 lg:gap-0'
            >
                <div className='flex flex-col gap-4'>
                    <Image
                    src={Logo}
                    alt='Logo'/>
                    <p className='opacity-40 max-w-80'>Объединяем инициативы, проекты и экспертизу в единую систему.</p>
                </div>
                <div>
                    <h2 className='opacity-50'>Меню</h2>
                    <div className='flex flex-col'>
                        <Link href='about' className='hover:underline'>О нас</Link>
                        <Link href='project' className='hover:underline'>Проекты</Link>
                        <Link href='partners' className='hover:underline'>Партнёрам</Link>
                        <Link href='team' className='hover:underline'>Участникам</Link>
                        <Link href='contacts' className='hover:underline'>Контакты</Link>
                    </div>
                </div>
                <div>
                    <h2 className='opacity-50'>Контакты</h2>
                    <div className='flex flex-col gap-3'>
                        <p className='text-2xl'>+7 (495) 230-57-35</p>
                        <div>
                            <CopyButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse justify-between gap-12 px-5
                lg:flex-row lg:gap-0 lg:px-0'
            >
                <div className='flex flex-col gap-2 opacity-40'>
                    <p>2026 Все права защищены</p>
                    <div className='flex gap-2'>
                        <p>Сайт разработан</p>
                        <Image
                        src={LunarWeb}
                        alt="LUNARWEB"/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 underline'>
                    <Link href="p-c" className='transition duration-300 opacity-40 hover:opacity-100'>Политика конфиденциальности</Link>
                    <Link href="o-p-d" className='transition duration-300 opacity-40 hover:opacity-100'>Обработка персональных данных</Link>
                </div>
            </div>
        </footer>
    );
};