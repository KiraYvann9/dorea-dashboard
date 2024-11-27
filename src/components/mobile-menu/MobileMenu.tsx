import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Menu} from "lucide-react";
import React from "react";
import {usePathname} from "next/navigation";
import {sidebarItems, SidebarItemsType} from "@/components/sidebar/sidebarItems";
import Link from "next/link";
import {cn} from "@/lib/utils";
import Image from "next/image";


export const MobileMenu = () =>{

    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className={'sm:hidden'}>
                <Menu size={22}/>
            </SheetTrigger>
            <SheetContent side={'left'} className={'w-[60%]'}>
                <SheetHeader className={'flex flex-col gap-8'}>
                    <SheetTitle className={'text-2xl font-bold flex items-center gap-2'}> <Image src={'/assets/dorea_logo.png'}
                                                                         alt={'logo'} width={40}
                                                                         height={40}/> Dorea</SheetTitle>
                    <SheetDescription className={'mt-6 flex flex-col gap-4'}>
                        {sidebarItems.map((item: SidebarItemsType, index) => (
                            <Link key={index} href={item.href} className={cn('flex gap-3 p-2 border-transparent', pathname===item.href && 'text-purple-700 border rounded-md border-purple-500 bg-purple-100')}>
                                <item.icon/> {item.title}
                            </Link>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}