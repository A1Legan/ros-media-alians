'use client';

import Image from "next/image";
import Link from "next/link";

import RightArrow from "@/public/Right-Arrow.png";
import Pentangle from "@/public/Pentangle.png";
import AboutImage from "@/public/AboutImage.png";


import Partner from "@/components/partner";

export default function Home() {
  return (
    <main className="ml-auto mr-auto ">
      <Hero />
      <Part />
      <About />
      <Carousel />
      <Personal />
      <Contact />
      <Review />
    </main>
  );
}

export function Hero() {
  return (
      <section className="grid max-w-250 text-center ml-auto mr-auto py-80 gap-10">
          <h1 className="text-7xl opacity-85">Альянс, <span className="text-[#0C87FF]">объединяющий</span> инициативы и людней</h1>
          <p className="max-w-130 ml-auto mr-auto text-xl opacity-75">Проекты, которые объединяют людей, идеи и смыслы. От концепции до реализации — в единой системе.</p>
          <Link href='contacts' className="flex justify-center ml-auto mr-auto bg-[#0074FF] gap-2 items-center py-3 px-10 rounded-xl">
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
    <section className="text-center ml-auto mr-auto mt-110">
      <h2 className="text-md tracking-[4]">ПАРТНЁРЫ, КОТОРЫЕ ВЫБИРАЮТ НАС</h2>
      <div className="flex gap-4 justify-center my-20">
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
    <section className="flex items-start justify-between ml-auto mr-auto max-w-336 my-40">
      <div className="flex items-center gap-2 text-2xl">
        <Image
        src={Pentangle}
        width={16}
        alt="Li"/>
        <h2 className="">О нас</h2>
      </div>
      <div className="grid gap-10">
        <h3 className="text-3xl max-w-160 opacity-75 tracking-[1]">Реализуем проекты полного цикла — от инициативы до практического запуска.</h3>
        <div className="flex gap-60 text-xl opacity-50">
          <p className="max-w-96">Выстраиваем процессы от инициативы до практического результата, объединяя участников, экспертов и партнёров.</p>
          <p className="max-w-96">Наша задача — создать управляемую среду, в которой сложные проекты реализуются последовательно и эффективно.</p>
        </div>
        <Image className="" 
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
    <main className="min-h-scree">
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
    <section className="flex justify-between ml-auto mr-auto max-w-366">
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
          <label htmlFor="Agree" className="text-2xl">Даю <Link href="#" className="text-[#0074FF]">согласие на обработку</Link> персональных данных и принимаю условия <Link href="#" className="text-[#0074FF]">политики конфиденциальности</Link></label>
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
    <main className="min-h-scree">
      <section className="py-16 px-4">
        <Feedback images={images} />
      </section>
    </main>
  );
}