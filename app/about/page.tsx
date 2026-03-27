import Image from "next/image";
import Link from "next/link";

import AboutImage from "@/public/Leng.png";
import Pentangle from "@/public/Pentangle.png";

export default function Home() {
    return (
        <section className="h-screen flex flex-col ml-auto mr-auto max-w-336 gap-12 px-5 my-10
            lg:px-0"
        >
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
        <div className="flex flex-col-reverse gap-12
            lg:flex-row">
            <Image
            src={AboutImage}
            alt="Image"/>
            <div className="flex flex-col gap-12
                lg:w-1/2"
            >
                <h3 className="max-w-160 tracking-[1] text-2xl
                    lg:text-3xl lg:leading-10"
                >Реализуем проекты полного цикла — от инициативы до практического запуска.</h3>
                <div className="flex flex-col gap-6 text-xl opacity-50
                    lg:flex-row"
                >
                    <p className="lg:w-1/2">Выстраиваем процессы от инициативы до практического результата, объединяя участников, экспертов и партнёров.</p>
                    <p className="lg:w-1/2">Наша задача — создать управляемую среду, в которой сложные проекты реализуются последовательно и эффективно.</p>
                </div>
            </div>
        </div>
    </section>
    );
};