'use client'

import {useState} from "react";
import { format } from "date-fns";
import { fr } from 'date-fns/locale'
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {Plus} from "lucide-react";

export function AddEvent() {

    const [date, setDate] = useState<Date>(new Date());

    return (
        <Dialog>
            <DialogTrigger asChild className={'ml-auto'}>
                <Button variant="default"><Plus size={20}/> Ajouter un évènement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">

                <DialogHeader>
                    <DialogTitle>Ajouter un évènement</DialogTitle>
                    <DialogDescription>
                        Ajouter et planifier un évènement
                    </DialogDescription>
                </DialogHeader>

                <div className="flex gap-4 flex-col">
                    <div className="w-full">
                        <Input
                            id="name"
                            className="w-full border border-red-200"
                            placeholder={'Titre de l\'évènement'}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Catégorie</label>
                        <Select>
                            <SelectTrigger className="w-full border-red-200">
                                <SelectValue placeholder="Selectionnez la catégorie"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="visite">Visite</SelectItem>
                                <SelectItem value="concert">Concert</SelectItem>
                                <SelectItem value="mariage">Mariage</SelectItem>
                                <SelectItem value="bapteme">Baptême</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full ">
                        <label htmlFor="">Date de début</label>
                        <Popover>
                            <PopoverTrigger asChild className={'border border-red-200'}>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP", {locale: fr}) : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    locale={fr}
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="">Date de fin</label>
                        <Popover>
                            <PopoverTrigger asChild className={'border border-red-200'}>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP", {locale: fr}) : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    locale={fr}
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="w-full">
                        <label htmlFor="">De</label>
                        <Input
                            id="name"
                            className="w-full border border-red-200"
                            placeholder={''}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">A</label>
                        <Input
                            id="name"
                            className="w-full border border-red-200"
                            placeholder={''}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Description :</label>
                        <Input
                            id="name"
                            className="w-full border border-red-200"
                            placeholder={''}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Ajouter</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
