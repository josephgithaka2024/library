import Image from 'next/image';

export default function Brand() {
    return (
        <div className='h-16 w-full flex flex-row items-center justify-start gap-2'>
            <Image
                src={'/logo.svg'}
                alt='Brand Icon'
                height={50}
                width={50}
                className='w-8 h-8'
            />
            <p className='font-bold text-2xl'>Library</p>
        </div>
    );
}
