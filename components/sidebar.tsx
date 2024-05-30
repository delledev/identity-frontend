'use client'
import React, { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { title } from 'process'
import useOwner from '@/hooks/useOwner'

let ownerLinks = [
    {
        title:'divider',
        href:'divider'
    },
    {
        title:'Display Vehicle Applications'
        ,href:'/displayvapp'
    },
    {
        title:'Display Land Applications'
        ,href:'/displaylapp'
    }
]


export default function Sidebar  ()  {
    let Links = [
        {
            title:'divider',
            href:'divider'
        },
        {
            title:'All Vehicles',
            href: '/allvehicles'
        },
        {
            title: 'My Vehicles',
            href: '/myvehicles'
        },
        {
            title: 'My Vehicle Applications',
            href: '/myvehicleapplications'
        },
        {
            title: 'Create Vehicle Applications',
            href: '/createvehicleapplication'
        },
        {
            title:'divider',
            href:'divider'
        },
        {
            title:'All Properties',
            href: '/allproperties'
        },
        {
            title: 'My Properties',
            href: '/myproperties'
        },
        {
            title: 'My Property Applications',
            href: '/mypropertyapplications'
        },
        {
            title: 'Create Property Application',
            href: '/createpropertyapplication'
        },
    ]
    const isOwner = useOwner()
    if(isOwner){
        Links = [...Links, ...ownerLinks]
    }
    
    const path = usePathname()
  return (
    <div className='absolute h-[90vh] w-80 bg-[#2d2d2d] left-[1rem] top-[3rem] rounded-xl p-1 pt-4'>
        <div className='flex mx-auto w-fit'>
            <w3m-button></w3m-button>
        </div>
        
        <div className='flex flex-col h-auto w-full m-auto mt-2 gap-2'>

            {Links.map((link, i) => {
                if(link.title == 'divider'){
                    return <div key={i} className='w-[70%] mx-auto h-[2px] rounded-xl opacity-25 bg-white '>
                    </div>
                } else {
                    return (
                    <Link key={i}
                    href={link.href}
                    className={`flex m-auto p-1 px-8 rounded-md hover:outline hover:outline-[#70FFAF] transition-all ${path.includes(link.href) ? 'bg-[#70FFAF] text-black' : 'bg-[#2d2d2d]'} ` } >
                        <p className='text-center w-full'>
                        {link.title}  
                        </p>
                    </Link>

                    )
                }
            })} 

        </div>
    </div>
  )
}
