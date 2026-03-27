'use client';

import Image from "next/image";
import Link from "next/link";

import RightArrow from "@/public/Right-Arrow.png";
import Pentangle from "@/public/Pentangle.png";
import AboutImage from "@/public/AboutImage.png";
import BackItems from "@/public/SVG_mask-group.svg";


import Partner from "@/components/partner";

export default function Home() {
  return (
    <main className="ml-auto mr-auto">
      <Back />
      <Hero />
      <Part />
      <About />
      <Carousel />
      <div className="hidden ml-auto mr-auto justify-center
        lg:flex"
      >
        <Personal />
      </div>
      <Contact />
      <div className="hidden ml-auto mr-auto justify-center
        lg:flex"
      >
        <Review />
      </div>
    </main>
  );
}

export function Back() {
  return (
    <section className="ml-auto mr-auto
      lg:max-w-500">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 top-20 h-400 max-w-110 w-full overflow-hidden
        lg:max-w-500"
      style={{
        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
      }}>
        <div className="absolute w-140 h-70 bg-radial-[at_50%_0%] from-[#0074FF]/40 to-white/0 to-70% z-3 -translate-x-16 top-100
          lg:-top-60 lg:translate-x-0 lg:w-500 lg:h-250 lg:from-[#0074FF]/70"
        ></div>
        <div className="absolute bg-[#010B17] rounded-full border-[1] border-[#0074FF]/40 w-350 h-350 z-2 -left-3/4 transform -translate-y-1/2 ml-20
          lg:left-1/4 lg:top-20"
        ></div>
        <div className="absolute w-[1024] h-[793] bg-radial from-[#0074FF] to-white/0 to-40% opacity-40 top-70
          lg:left-6/17"></div>
        <Image className="absolute left-7/15 top-170 z-1
          lg:top-200 lg:left-8/15"
        src={BackItems} 
        width={800}
        alt=""/>
      </div>
      
      
    </section>
  );
};

export function Hero() {
  return (
      <section className="
        flex flex-col max-w-250 gap-10 ml-auto mr-auto px-5 py-50
        lg:text-center lg:px-0 lg:py-60"
      >
          <h1 className="text-5xl z-100
            lg:text-7xl"
          >Альянс, <span className="text-[#0C87FF]">объединяющий</span> инициативы и людней</h1>
          <p className="text-md max-w-130 ml-auto mr-auto opacity-75 z-100
            lg:text-xl"
          >Проекты, которые объединяют людей, идеи и смыслы. От концепции до реализации — в единой системе.</p>
          <Link href='contacts' className="flex justify-center ml-auto mr-auto bg-[#0074FF] gap-2 items-center py-3 px-10 rounded-xl z-100">
          Стать участником
          <Image 
          src={RightArrow}
          width={18}
          alt="RightArrow"/></Link>
      </section>
  );
}

export function Part() {
  return (
    <section className="text-center ml-auto mr-auto mt-30 
      lg:mt-110"
    >
      <h2 className="text-md tracking-[4]">ПАРТНЁРЫ, КОТОРЫЕ ВЫБИРАЮТ НАС:</h2>
      <div className="hidden gap-4 justify-center my-20
        lg:flex">
        <Partner />
        <Partner />
        <Partner />
        <Partner />
      </div>
    </section>
  );
};

export function About() {
  return (
    <section className="flex  flex-col px-5 items-start justify-between ml-auto mr-auto my-40 gap-12
      lg:max-w-336 lg:flex-row lg:px-0"
    >
      <div className="flex items-center gap-2 text-2xl">
        <Image
        src={Pentangle}
        width={16}
        alt="Li"/>
        <h2 className="">О нас</h2>
      </div>
      <div className="flex flex-col gap-10 ">
        <h3 className="text-2xl max-w-110 opacity-75 tracking-[1] bg-radial from-white from-20% to-[#b5b5b5] bg-clip-text text-transparent
        lg:max-w-160 lg:text-3xl"
        >Реализуем проекты полного цикла — от инициативы до практического запуска.</h3>
        <div className="flex flex-col gap-4 text-xl opacity-50
        lg:flex-row lg:gap-60"
        >
          <p className="max-w-96 text-lg
          lg:text-xl"
          >Выстраиваем процессы от инициативы до практического результата, объединяя участников, экспертов и партнёров.</p>
          <p className="max-w-96 text-lg
          lg:text-xl"
          >Наша задача — создать управляемую среду, в которой сложные проекты реализуются последовательно и эффективно.</p>
        </div>
        <Image
        src={AboutImage}
        width={1116}
        alt="Image"/>
      </div>
    </section>
  );
};

import Project from '@/components/project';
import ImageCarousel from '@/components/ImageCarousel';

export function Carousel() {
  const images = [Project, Project, Project, Project, Project, Project];

  return (
    <main className="min-h-scree ">
      <section className="py-16 px-4">
        <ImageCarousel images={images} />
        
      </section>
    </main>
  );
}

import People from '@/components/people';
import Person from '@/components/person';

export function Personal() {
  const images = [People, People, People, People, People, People, People];

  return (
    <main className="min-h-scree">
      <section className="py-16 px-4">
        <Person images={images} />
      </section>
    </main>
  );
}

export function Contact() {
  return (
    <section className="flex-col flex px-5 justify-between ml-auto mr-auto gap-6
    lg:max-w-366 lg:flex-row lg:px-0">
      <div className="flex flex-col">
        <h2 className="bg-linear-to-r to-white from-[#b5b5b5] bg-clip-text text-5xl text-transparent font-medium max-w-100">Присоединиться к альянсу</h2>
        <p className="opacity-50 mt-5 text-xl max-w-140">Оставьте заявку, чтобы включиться в действующие инициативы и получить информацию о формате участия.</p>
      </div>
      <form action="" className="flex flex-col max-w-200 w-full gap-6">
        <div className="flex flex-col gap-4">
          <input type="text" name="text" id="FIO" required placeholder="ФИО" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full"/>
          <input type="text" name="text" id="FIO" required placeholder="Контакт для связи" className="bg-white/5 px-4 py-6 rounded-2xl text-xl w-full"/>
        </div>
        <button className="bg-[#0074FF] py-6 rounded-2xl text-2xl">Стать участником</button>
        <div className="flex items-start gap-2">
          <input type="checkbox" id="Agree" className="size-8 accent-[#0074FF]"/>
          <label htmlFor="Agree" className="text-lg
            lg:text-2xl"
          >Даю <Link href="#" className="text-[#0074FF]">согласие на обработку</Link> персональных данных и принимаю условия <Link href="#" className="text-[#0074FF]">политики конфиденциальности</Link></label>
        </div>
      </form>
    </section>
  );
};

import Feedback from '@/components/feedback';
import Comment from '@/components/comment';

export function Review() {
  const images = [Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment, Comment];

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4">
        <Feedback images={images} />
      </section>
    </main>
  );
}