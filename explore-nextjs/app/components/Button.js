"use client";

import { useRouter } from 'next/navigation';

const Button = ({children}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/dashboard/analytics');
    }
  return (
    <button onClick={handleClick} className='bg-blue-500 p-2 rounded text-gray-50'>{children}</button>

  )
}

export default Button
