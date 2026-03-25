import Image from "next/image";
import Link from "next/link";

import AI from "@/public/AI.png";

export default function Partner() {
    return (
        <Link href="#" className="bg-linear-to-b from-white/10 to-white/7 px-40 py-20 rounded-4xl">
            <Image 
            src={AI}
            width={108}
            alt="AI"/>
        </Link>
    );
};