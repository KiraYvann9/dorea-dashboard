'use client'

import {Form, FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Plus} from "lucide-react";

const schema = z.object({
    email: z.string(),
    church_id: z.string(),
    department_id: z.string(),
    role_id: z.string(),

})

export const FormComponents = () =>{

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            church_id: '',
            department_id: '',
            role_id: ''
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
                        <FormLabel className={'text-muted-foreground'}>E-mail <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14 text-xl'} type={'email'} placeholder={'example@example.com'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'email'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem>
                        <FormLabel className={'text-muted-foreground'}>Eglise <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'Commune'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'church_id'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem>
                        <FormLabel className={'text-muted-foreground'}>Département <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'adresse'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'department_id'} control={form.control}/>
                <FormField render={({field})=>(
                    <FormItem className={'flex-1'}>
                        <FormLabel className={'text-muted-foreground'}>Role <span className={'text-red-500'}>*</span> </FormLabel>
                        <FormControl>
                            <Input className={'border border-orange-300 h-14'} type={'text'} placeholder={'description'} {...field}/>
                        </FormControl>
                    </FormItem>
                )} name={'role_id'} control={form.control}/>

                <Button variant="default" type="submit" className={'w-full sm:w-auto h-14 flex items-center'} title={'add church button'}> <Plus/> Enregistrer</Button>
            </form>

        </Form>
    )

}