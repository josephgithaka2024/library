'use client';
import { useState } from 'react';
import Container from '../Container';
import Image from 'next/image';

export default function Dropdown({
    dropdownTitle,
    children,
    image,
}: DropdownProps) {
    const [state, setState] = useState(Boolean);
    function toogleDropdown() {
        setState(!state);
    }
    return (
        <Container styles='flex flex-col'>
            <div
                className='flex flex-row items-center gap-4 h-12 hover:cursor-pointer'
                onClick={toogleDropdown}
            >
                <div className='flex flex-row items-center justify-start'>
                    <Image
                        src={image}
                        alt='Landing Icon'
                        height={40}
                        width={40}
                        className='w-5 h-5'
                    />
                </div>
                <p className='font-semibold'>{dropdownTitle}</p>
                <div className='flex-grow flex flex-row items-center justify-end'>
                    <Image
                        src='/icons/arrow-down.svg'
                        alt='Arrow Down Icon'
                        height={40}
                        width={40}
                        className='w-3 h-3'
                    />
                </div>
            </div>
            {state ? (
                <div className='flex flex-col'>{children}</div>
            ) : (
                <div></div>
            )}
        </Container>
    );
}
