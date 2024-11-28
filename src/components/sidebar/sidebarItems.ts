import {CalendarFold, Church, LayoutGrid, LucideIcon, UsersRound} from "lucide-react";

export type SidebarItemsType ={
    title: string,
    icon: LucideIcon,
    href: string,
}
export const sidebarItems : SidebarItemsType[] = [
    {
        title: 'Dashbord',
        icon: LayoutGrid,
        href: '/dashboard',
    },
    {
        title: 'Eglises',
        icon: Church,
        href: '/church',
    },
    {
        title: 'Membres',
        icon: UsersRound,
        href: '/members',
    },
    {
        title: 'Evènements',
        icon: CalendarFold,
        href: '/events',
    },
]