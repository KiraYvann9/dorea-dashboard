'use client'

import React from 'react';
import {sidebarItems, SidebarItemsType} from "@/components/sidebar/sidebarItems";
import {usePathname} from "next/navigation";
import {poppins} from "@/fonts/fonts";
import {cn} from "@/lib/utils";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {MobileMenu} from "@/components";
import Image from "next/image";


export const Sidebar = ()=> {

    const pathname = usePathname();
    return (
        <ul className={`py-4 px-8 w-full flex justify-between items-center bg-white border-b`}>
            <div className={`hidden ${poppins.variable} sm:flex gap-10 items-center`}>
                <h1 className={'text-2xl font-bold flex gap-3 items-center'}><Image src={'/assets/dorea_logo.png'}
                                                                                    alt={'logo'} width={40}
                                                                                    height={40}/> DOREA</h1>
                {sidebarItems.map((item: SidebarItemsType, index) => (
                    <li key={index}>
                        <Link href={item.href}
                              className={cn('flex gap-3', pathname === item.href && 'text-purple-700')}>
                            <item.icon/>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </div>

            <MobileMenu/>

            <div className={'flex gap-4 items-center'}>
                <span className={'hidden sm:inline'}>KOUADIO Ludovic</span>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>


        </ul>
    );
}