'use client'


import {FormItem, Form, FormLabel, FormControl, FormField, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Eye, EyeClosed, Mail} from "lucide-react";
import Image from "next/image";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from 'next/navigation'

import {useUserStore} from "@/stores/useUserStore";
import {useMutation} from "@tanstack/react-query";

const schema = z.object({
    email: z.string(),
    password: z.string(),
})


export default function Home() {
    const login = useUserStore(s => s.login)
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const [showPWD, setShowPWD] = useState<boolean>(false)
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof schema>) =>login(data),
        onSuccess: (data)=>{
            console.log('user ', data)
        },
        onError: (error) =>{
            console.log(error)
        }
    })

    const submit = (data: z.infer<typeof schema>) =>{
        mutation.mutate(data)
    }

  return (
        <div className={'min-h-screen w-full sm:w-[60%] flex flex-col justify-center items-center gap-4'}>
            <Image src={'/assets/dorea_logo.png'} alt={'logo'} width={235} height={70}/>
            <h2 className={'text-2xl font-medium text-gray-600'}>Connectez vous</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className={'w-full xl:w-2/3 px-6 flex flex-col gap-6 justify-center items-center'}>

                    <div className={'w-full flex flex-col justify-center gap-4'}>
                        <FormField render={({field})=>(
                            <FormItem>
                                <FormLabel>E-mail <span className={'text-red-500'}>*</span></FormLabel>
                                <FormControl>
                                    <div className={'flex border rounded-md w-full relative items-center'}>
                                        <Input {...field} className={'w-full h-14 border-none outline-none pr-8'} placeholder={'Entrez votre email ici'}/>
                                        <Mail size={18} className={'absolute right-2 text-gray-400'}/>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={'email'} control={form.control}/>

                        <FormField render={({field})=>(
                            <FormItem>
                                <FormLabel>Mot de passe <span className={'text-red-500'}>*</span></FormLabel>
                                <FormControl>
                                    <div className={'flex border rounded-md w-full relative items-center'}>
                                        <Input {...field} type={!showPWD?'password':'text'} className={'w-full h-14 border-none outline-none pr-8 z-0'}
                                               placeholder={'Mot de passe'}/>
                                        <Button className={'p-0 bg-transparent hover:bg-transparent absolute right-2'} title={'eye'} onClick={()=>setShowPWD(!showPWD)}>
                                            { !showPWD ? <EyeClosed size={24} className={'text-gray-400'}/> :
                                            <Eye size={24} className={'text-gray-400'}/>}
                                        </Button>

                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name={'password'} control={form.control}/>
                    </div>

                    <Button className={'h-14 w-full'} type={'submit'} title={'login button'}> Se Connecter</Button>

                    <div className={'w-full flex justify-center items-center relative'}>
                        <div className={'w-full h-[.3px] bg-gray-200'}></div>
                        <span className={'absolute inline-block bg-white px-2'}>Ou</span>
                    </div>

                    <div className={'w-full flex gap-4 items-center justify-center'}>
                        <Button variant={'outline'} className={'flex gap-2'} title={'google button'}>
                            <Image src={'/assets/auth/google.png'} width={20} height={20} alt={'logo google'}/>
                            <span>Google</span>
                        </Button>
                        <Button variant={'outline'} className={'flex gap-2'} title={'apple button'}>
                            <Image src={'/assets/auth/apple.png'} width={20} height={20} alt={'logo apple'}/>
                            <span>Apple</span>
                        </Button>
                    </div>
                    <p>Vous n'avez pas de compte ? <Link href={'/auth/register'} className={'text-orange-700'}>Créer un compte</Link></p>
                </form>
            </Form>
        </div>
  );
}
