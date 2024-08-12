"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

const CustomLink = ({ path, children }) => {
    const pathname = usePathname();
    // console.log('pathname:', pathname);
    const active = pathname === path ? 'text-blue-500' : 'text-gray-500';
  return <Link className={active} href={path}>{children}</Link>;
};

export default CustomLink;
