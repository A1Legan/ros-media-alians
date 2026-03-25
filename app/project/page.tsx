import Image from "next/image";
import Link from "next/link";

import Pentangle from "@/public/Pentangle.png";

export default function Home() {
    return (
        <section className="flex flex-col ml-auto mr-auto max-w-336 gap-12">
        <div>
            <div className="flex items-center gap-2">
                <Link href="/" className="opacity-50">Главная</Link>
                <Image className="opacity-50"
                src={Pentangle}
                width={8}
                alt="Pentangle"/>
                <p>Проекты</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">Проекты</h2>
        </div>
        <div>
            <div>
                <button>Проекты</button>
                <button>Архив проектов</button>
                <button>Все</button>
            </div>
            <div>

            </div>
        </div>
    </section>
    );
};