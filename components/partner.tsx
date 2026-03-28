import Image from "next/image";
import Link from "next/link";

import AI from "@/public/AI.png";

export default function Partner() {
    return (
        <Link href="#" className="bg-linear-to-b from-white/10 to-white/7 px-20 py-20 rounded-4xl">
            <Image className="ml-10 mr-40 items-center"
            src={AI}
            width={120}
            alt="AI"/>
        </Link>
    );
};