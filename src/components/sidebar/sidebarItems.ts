import {CalendarFold, Church, LayoutGrid, LucideIcon, Notebook, UserRound, UsersRound} from "lucide-react";

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
        title: 'Equipes',
        icon: UsersRound,
        href: '/teams',
    },
    {
        title: 'Membres',
        icon: UserRound,
        href: '/members',
    },
    {
        title: 'Evènements',
        icon: CalendarFold,
        href: '/events',
    },
    {
        title: 'Agenda',
        icon: Notebook,
        href: '/diary',
    },
]