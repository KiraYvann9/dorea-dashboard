'use client'

import {Form, FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Plus} from "lucide-react";

const schema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
    commune: z.string(),

})

export const FormComponents = () =>{

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            location: '',
            description: '',
            commune: ''
        }
    });

    const submit = (data: z.infer<typeof schema>) =>{
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className={'space-y-3 sm:flex items-end gap-4'}>
                <FormField render={({field})=>(
                    <FormItem>
                        <FormLabel className={'text-muted-foreground'}>Nom de l'église <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14 text-xl'} type={'text'} placeholder={'Nom de l\'église '} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'name'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem>
                        <FormLabel className={'text-muted-foreground'}>Commune <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'Commune'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'commune'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem>
                        <FormLabel className={'text-muted-foreground'}>Adresse <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'adresse'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'location'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem className={'flex-1'}>
                        <FormLabel className={'text-muted-foreground'}>Description <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'description'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'description'} control={form.control}/>

                <Button variant="default" type="submit" className={'w-full sm:w-auto h-14 flex items-center'} title={'add church button'}> <Plus/> Enregistrer</Button>
            </form>

        </Form>
    )

}