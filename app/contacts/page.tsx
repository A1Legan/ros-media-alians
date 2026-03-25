import Link from "next/link";
import Image from "next/image";

import Pentangle from "@/public/Pentangle.png";

export default function Home() {
    return (
        <section className="flex h-[80vh] flex-col ml-auto mr-auto max-w-366 gap-12 my-20">
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>Контакты</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">Контакты</h2>
        </div>
        <div className="flex justify-between">
            <div>
                <h2 className='opacity-50'>Контакты</h2>
                <div className='flex flex-col text-2xl gap-3'>
                    <p>+7 (495) 230-57-35</p>
                    <button className='underline'>mr.humanities@mail.ru</button>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="bg-linear-to-r to-white from-[#b5b5b5] bg-clip-text text-5xl text-transparent font-medium max-w-150">Присоединиться к реализации проектов</h2>
                <form action="" className="flex flex-col max-w-200 w-full gap-6">
                    <div className="flex flex-col gap-4">
                        <input type="text" name="text" id="FIO" required placeholder="ФИО" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full"/>
                        <input type="text" name="text" id="FIO" required placeholder="Контакт для связи" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full"/>
                    </div>
                    <button className="bg-[#0074FF] py-3 rounded-full text-2xl">Стать участником</button>
                    <div className="flex items-start gap-2">
                        <input type="checkbox" id="Agree" className="size-8 accent-[#0074FF]"/>
                        <label htmlFor="Agree" className="text-2xl">Даю <Link href="#" className="text-[#0074FF]">согласие на обработку</Link> персональных данных и принимаю условия <Link href="#" className="text-[#0074FF]">политики конфиденциальности</Link></label>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};