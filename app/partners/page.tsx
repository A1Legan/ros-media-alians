import Image from "next/image";
import Link from "next/link";

import Pentangle from "@/public/Pentangle.png";
import AI from "@/public/AI.png";
import Arrow from "@/public/Arrow.png";

export default function Home() {
    return (
        <section className=" flex flex-col ml-auto mr-auto max-w-336 gap-12 my-10 px-5
            lg:px-0"
        >
            <div>
                <div className="flex items-center gap-2">
                    <Link href="/" className="opacity-50">Главная</Link>
                    <Image className="opacity-50"
                    src={Pentangle}
                    width={8}
                    alt="Pentangle"/>
                    <p>Партнёры</p>
                </div>
                <h2 className="flex items-center gap-2 text-4xl">Партнёры</h2>
            </div>
            <div className="hidden flex-col gap-4
                lg:flex"
            >
                <div className="flex gap-4">
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                    <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 w-1/4 py-16 rounded-4xl flex justify-center">
                        <Image
                        src={AI}
                        alt="AI"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4
                lg:hidden"
            >
                <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 py-16 rounded-4xl flex justify-center">
                    <Image
                    src={AI}
                    alt="AI"/>
                    </Link>
                <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 py-16 rounded-4xl flex justify-center">
                    <Image
                    src={AI}
                    alt="AI"/>
                    </Link>
                <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 py-16 rounded-4xl flex justify-center">
                    <Image
                    src={AI}
                    alt="AI"/>
                </Link>
                <Link href="#" className="bg-linear-to-b from-white/5 to-white/4 py-16 rounded-4xl flex justify-center">
                    <Image
                    src={AI}
                    alt="AI"/>
                </Link>
            </div>
            <Link href="project" className="flex gap-2 items-center justify-center">
                <p className="opacity-50">Смотреть ещё</p>
                <Image 
                src={Arrow}
                width={20}
                alt="Arrow"/>
            </Link>
        </section>
    );
};