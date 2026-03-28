import Image from 'next/image';

import Ann from '@/public/Ann.jpg';

export default function People() {
    return (
        <div>
            <Image className='rounded-3xl'
            src={Ann}
            width={1000}
            alt='Comand'/>
            <div className='text-center pt-2'>
                <h3 className='text-2xl text-white'>Анна Смирнова</h3>
                <p className='opacity-50 text-lg text-white'>Название должности</p>
                <p className='opacity-50 text-white'>corp@mail.ru</p>
            </div>
        </div>
    );
};