'use client';

const CopyButton = () => (
    <button
        onClick={() => navigator.clipboard.writeText('mr.humanities@mail.ru')}
        className="text-white text-2xl cursor-pointer underline underline-offset-4 transition duration-500 hover:text-[#0074FF]"
    >
        mr.humanities@mail.ru
    </button>
);

import Link from "next/link";
import Image from "next/image";

import Pentangle from "@/public/Pentangle.png";

export default function Home() {
    return (
        <section className="flex flex-col h-[80vh] ml-auto mr-auto max-w-366 gap-12 my-20 px-5
            lg:px-0"
        >
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50 text-white">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>Контакты</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl text-white">Контакты</h2>
        </div>
        <div className="flex flex-col justify-between gap-12
            lg:flex-row"
        >
            <div>
                <h2 className='opacity-50 text-white'>Контакты</h2>
                <div className='flex flex-col text-2xl gap-3'>
                    <p className="text-white">+7 (495) 230-57-35</p>
                    <div>
                        <CopyButton />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="bg-linear-to-r to-white from-[#b5b5b5] bg-clip-text text-transparent font-medium text-3xl
                    lg:text-5xl lg:max-w-150"
                >Присоединиться к реализации проектов</h2>
                <form action="" className="flex flex-col max-w-200 w-full gap-6">
                    <div className="flex flex-col gap-4">
                        <input type="text" name="text" id="FIO" required placeholder="ФИО" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full border-2 border-white/5 text-white"/>
                        <input type="text" name="text" id="FIO" required placeholder="Контакт для связи" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full border-2 border-white/5 text-white"/>
                    </div>
                    <button className="bg-[#0074FF] py-3 text-2xl rounded-xl text-white
                        lg:rounded-full"
                    >Стать участником</button>
                    <div className="flex items-start gap-2">
                        <input type="checkbox" id="Agree" className="size-8 accent-[#0074FF]"/>
                        <label htmlFor="Agree" className="text-lg text-white
                            lg:text-2xl"
                        >Даю <Link href="#" className="text-[#0074FF]">согласие на обработку</Link> персональных данных и принимаю условия <Link href="#" className="text-[#0074FF]">политики конфиденциальности</Link></label>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};