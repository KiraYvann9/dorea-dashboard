'use client'

import React, { useState } from 'react'
import { addDays, format, startOfWeek, eachDayOfInterval, eachHourOfInterval, startOfDay, endOfDay, isSameDay } from 'date-fns'
import { fr } from 'date-fns/locale'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";

import { Calendar } from "@/components/ui/calendar"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {ChevronLeft, ChevronRight, Plus} from "lucide-react";
import {AddEvent} from "@/app/(dashboard)/diary/_components/dialogue/AddEvent";

const HOURS = Array.from({ length: 24 }, (_, i) => i)

export default function Dashboard() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const [currentDate, setCurrentDate] = useState(new Date())
    const [events, setEvents] = useState<Event[]>([
        { id: '1', title: 'Réunion', start: new Date(2023, 5, 15, 10), end: new Date(2023, 5, 15, 11) },
        { id: '2', title: 'Déjeuner', start: new Date(2023, 5, 16, 12), end: new Date(2023, 5, 16, 13) },
    ])

    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 })
    const endDate = addDays(startDate, 6)
    const days = eachDayOfInterval({ start: startDate, end: endDate })

    const previousWeek = () => setCurrentDate(date => addDays(date, -7))
    const nextWeek = () => setCurrentDate(date => addDays(date, 7))

    const getEventsForDay = (day: Date) => {
        return events.filter(event => isSameDay(event.start, day))
    }


    return(
        <div className={'w-full flex items-start px-2'}>
            <section className={' space-y-2 pr-6'}>
                <div className={'flex gap-4'}>
                    <Image src={'/assets/calendar.webp'} alt={'calendar'} width={60} height={20}/>
                    <div>
                        <h1 className={'text-3xl font-semibold text-gray-700 tracking-widest'}>Agenda</h1>
                        <span className={'text-muted-foreground'}>Vos évênements</span>
                    </div>
                </div>

                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                />


                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'text-2xl font-semibold'}>Cartégories</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li className={''}>
                                    <span className={'inline-block w-2 h-2 rounded-full bg-red-400'}></span> Visite
                                </li>
                                <li className={''}><span className={'inline-block w-2 h-2 rounded-full bg-orange-400'}></span> Concert
                                </li>
                                <li className={''}><span
                                    className={'inline-block w-2 h-2 rounded-full bg-green-400'}></span> Mariage
                                </li>
                                <li className={''}><span
                                    className={'inline-block w-2 h-2 rounded-full bg-blue-400'}></span> Baptême
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>


            <Card className="flex-1 rounded-none border-y-0">

                <CardHeader className={'flex flex-row items-center w-full'}>
                    <CardTitle className="text-3xl font-bold capitalize">
                        {format(Date.now(), 'MMMM y', { locale: fr })}
                    </CardTitle>
                    <div className="flex gap-4">
                        <Button onClick={previousWeek} variant={'ghost'} > <ChevronLeft size={22}/> </Button>
                        <Button onClick={nextWeek} variant={'ghost'} > <ChevronRight size={22}/> </Button>
                    </div>

                    <AddEvent/>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-7 border-t border-l">
                        {days.map((day, index) => (
                            <div key={index} className="text-center font-semibold border-r border-b p-2">
                                {format(day, 'EEEE', { locale: fr })}
                                <br />
                                {format(day, 'd', { locale: fr })}
                            </div>
                        ))}
                        {HOURS.map((hour) => (
                            <React.Fragment key={hour}>
                                {days.map((day, dayIndex) => {
                                    const eventsForDay = getEventsForDay(day)
                                    return (
                                        <div key={dayIndex} className="border-r border-b relative h-12">
                                            {eventsForDay.map((event) => {
                                                if (event.start.getHours() === hour) {
                                                    return (
                                                        <div
                                                            key={event.id}
                                                            className="absolute w-full bg-blue-200 p-1 text-xs overflow-hidden border-t border-blue-300"
                                                            style={{
                                                                top: `${(event.start.getMinutes() / 60) * 100}%`,
                                                                height: `${((event.end.getTime() - event.start.getTime()) / (1000 * 60 * 60)) * 100}%`,
                                                                zIndex: 10
                                                            }}
                                                        >
                                                            {event.title}
                                                        </div>
                                                    )
                                                }
                                                return null
                                            })}
                                        </div>
                                    )
                                })}
                            </React.Fragment>
                        ))}
                    </div>
                </CardContent>

            </Card>


        </div>
    )
}