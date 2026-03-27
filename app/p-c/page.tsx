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
                <p>Политика конфиденциальности</p>
            </div>
            <h2 className="flex items-center gap-2 text-4xl">Политика конфиденциальности</h2>
        </div>
    </section>
    );
};