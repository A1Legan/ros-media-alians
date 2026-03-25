import Image from "next/image";
import Link from "next/link";

import AboutImage from "@/public/Leng.png";
import Pentangle from "@/public/Pentangle.png";

export default function Home() {
    return (
        <section className="h-screen flex flex-col ml-auto mr-auto max-w-336 gap-12">
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>О нас</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">О нас</h2>
        </div>
        <div className="flex gap-12">
            <Image
            src={AboutImage}
            alt="Image"/>
            <div className="flex flex-col w-1/2 gap-12">
                <h3 className="text-3xl max-w-160 tracking-[1] leading-10">Реализуем проекты полного цикла — от инициативы до практического запуска.</h3>
                <div className="flex gap-6 text-xl opacity-50">
                    <p className="w-1/2">Выстраиваем процессы от инициативы до практического результата, объединяя участников, экспертов и партнёров.</p>
                    <p className="w-1/2">Наша задача — создать управляемую среду, в которой сложные проекты реализуются последовательно и эффективно.</p>
                </div>
            </div>
        </div>
    </section>
    );
};