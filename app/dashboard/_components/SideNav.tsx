"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'

// Dynamically import Image component to optimize loading
const Image = dynamic(() => import('next/image'))

function SideNav() {
    const router = useRouter();

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    const path = usePathname();

    const handleNavigation = (path: string) => {
        router.push(path);
    }

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center border'>
                <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div 
                        key={index} 
                        className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                            ${path === menu.path && 'bg-primary text-white'}
                        `}
                        onClick={() => handleNavigation(menu.path)}
                    >
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack></UsageTrack>
            </div>
        </div>
    )
}

export default SideNav
