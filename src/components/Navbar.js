'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname= usePathname()
    return (
        <nav className='py-5 flex justify-between items-center px-5 bg-sky-100'>
            <h1>Logo</h1>
            <ul className='flex gap-x-6 items-center'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;