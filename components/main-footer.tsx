import Image from 'next/image';
import Link from 'next/link';

import LunarWeb from '@/public/LunarWeb.svg';
import Logo from "@/public/Logo.png";

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center max-w-366 ml-auto mr-auto gap-12 py-12'>
            <hr className='opacity-10'/>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4'>
                    <Image
                    src={Logo}
                    alt='Logo'/>
                    <p className='opacity-40 max-w-80'>Объединяем инициативы, проекты и экспертизу в единую систему.</p>
                </div>
                <div>
                    <h2 className='opacity-50'>Меню</h2>
                    <div className='flex flex-col'>
                        <Link href='about'>О нас</Link>
                        <Link href='project'>Проекты</Link>
                        <Link href='#'>Партнёрам</Link>
                        <Link href='#'>Участникам</Link>
                        <Link href='contacts'>Контакты</Link>
                    </div>
                </div>
                <div>
                    <h2 className='opacity-50'>Контакты</h2>
                    <div className='flex flex-col text-2xl gap-3'>
                        <p>+7 (495) 230-57-35</p>
                        <button className='underline'>mr.humanities@mail.ru</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between opacity-40'>
                <div className='flex flex-col gap-2'>
                    <p>2026 Все права защищены</p>
                    <div className='flex gap-2'>
                        <p>Сайт разработан</p>
                        <Image
                        src={LunarWeb}
                        alt="LUNARWEB"/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 underline'>
                    <Link href="#">Политика конфиденциальности</Link>
                    <Link href="#">Обработка персональных данных</Link>
                </div>
            </div>
        </footer>
    );
};