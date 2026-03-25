import Link from "next/link";
import Image from "next/image";

import Create from "@/public/Create.png";
import Cover from "@/public/Project.jpg";

export default function Project() {
    return (
        <Link href="#" className="
        flex flex-col bg-white/10 rounded-[16] py-4 px-4 ring-2 ring-white/0 shadow-md
        hover:ring-[#0074FF] hover:shadow-[#0074FF]
        ">
            <div className="flex items-center gap-2 mb-4">
                <Image
                src={Create}
                width={20}
                alt="Create"/>
                <p className="mt-1">Проект в работе</p>
            </div>
            <hr className="border border-dashed opacity-25"/>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold mt-4">Название проекта</h3>
                <Image 
                src={Cover}
                width={1000}
                alt="Project"/>
                <p className="opacity-75 max-w-100">Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...</p>
            </div>
        </Link>
    );
};