'use client'

import React from 'react';
import {sidebarItems, SidebarItemsType} from "@/components/sidebar/sidebarItems";
import {usePathname, useRouter} from "next/navigation";
import {poppins} from "@/fonts/fonts";
import {cn} from "@/lib/utils";
import Link from "next/link";


import {
    LogOut,
    Plus,
    Settings,
    User,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {MobileMenu} from "@/components";
import Image from "next/image";




export const Sidebar = ()=> {

    const pathname = usePathname();
    const router = useRouter();
    return (
        <ul className={`py-4 px-8 w-full flex justify-between items-center bg-white border-b`}>
            <div className={`hidden ${poppins.variable} sm:flex gap-10 items-center`}>
                <Image src={'/assets/dorea_logo.png'} alt={'logo'} width={132} height={40}/>
                {sidebarItems.map((item: SidebarItemsType, index) => (
                    <li key={index}>
                        <Link href={item.href}
                              className={cn('flex gap-3', pathname === item.href && 'text-orange-700')}>
                            <item.icon/>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </div>

            <MobileMenu/>

            <div className={'flex gap-4 items-center'}>
                <span className={'hidden sm:inline'}>KOUADIO Ludovic</span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className={'cursor-pointer'}>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem disabled>
                                <User />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                <Settings />
                                <span>Paramètres</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem disabled>
                                <Users />
                                <span>Membres</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                <Plus />
                                <span>Nouvelle Equipe</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />

                        <DropdownMenuSeparator />
                        <DropdownMenuItem className={'text-red-500'} onClick={() => router.push('/')}>
                            <LogOut />
                            <span>Déconnexion</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>


        </ul>
    );
}