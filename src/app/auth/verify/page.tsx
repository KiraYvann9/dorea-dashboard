'use client'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import {Form, FormField, FormItem, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import Image from "next/image";
import SuccesfullyProcessCard from "@/app/auth/verify/_components/SuccesfullyProcessCard";
import {useState} from "react";

const schema = z.object({
    email: z.string(),
    two_factor_code: z.string().min(4).max(4)
})

export default function Page() {
    const [isVerifed, setIsVerified] = useState(false)
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            two_factor_code: '',
        }
    })

    const sendOTP = async()=>{
        const response = await axios.get('');
        console.log(response)
    }

    const resendOTP = async()=>{
        const response = await axios.get('')
        console.log(response)
    }

    const mutation = useMutation({
        mutationFn: sendOTP,
        onSuccess: (data) => {
            console.log(data)
        }
    })

    const onSubmit = () =>{

    }

    return (
        <div className={'min-h-screen w-full sm:w-[60%] flex flex-col justify-center items-center gap-8 p-4'}>
            <Image src={'/assets/dorea_logo.png'} alt={'logo'} width={235} height={70}/>
            <h1 className="text-2xl sm:text-3xl font-bold text-center">Vérification de l'adresse e-mail</h1>

            {
                isVerifed ?
                <SuccesfullyProcessCard
                    messageTitle="Félicitations !"
                    messageContent="Votre compte à été vérifié avec succès. Vous pouvez dès à présent accéder à votre espace."
                    href="/dashboard"
                /> :
                <div className="flex flex-col items-center justify-center gap-14 p-4">

                    <div className="w-auto flex flex-col ">
                        <p className={'text-xl text-center'}>Veuillez saisir le <span
                            className="font-semibold">code de vérification à 6 chiffres</span> qui vous été
                            envoyé par e-mail !</p>
                        <span className="text-center italic">Ceci peut prendre quelques minutes, n&apos;hésitez pas à consulter vos <span
                            className="font-semibold">SPAMS</span> </span>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
                            <FormField
                                control={form.control}
                                name="two_factor_code"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup className={'space-x-1'}>
                                                    <InputOTPSlot index={0}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                    <InputOTPSlot index={1}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                    <InputOTPSlot index={2}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                </InputOTPGroup>
                                                <InputOTPSeparator className="text-orange-700"/>
                                                <InputOTPGroup className={'space-x-1'}>
                                                    <InputOTPSlot index={3}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                    <InputOTPSlot index={4}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                    <InputOTPSlot index={5}
                                                                  className="w-14 sm:w-20 h-14 bg-white text-3xl text-gray-900 font-semibold border border-orange-500"/>
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <p className="">Vous n&apos;avez toujours pas réçu de code? <Button
                                onClick={() => resendOTP()} className="underline text-custom-orange italic"
                                variant={'link'}>Me
                                renvoyer un code</Button></p>

                            <div className="flex flex-col items-center gap-4">
                                <Button type="submit"
                                        disabled={mutation.isPending} className={'p-6 text-xl'} onClick={()=>setIsVerified(true)}>
                                    {mutation.isPending ? (
                                        <div role="status" className="flex items-center gap-1">
                                            <svg width="30" height="30" fill="white" className="mr-2 animate-spin"
                                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                </path>
                                            </svg>
                                            <span className="text-white">Envoi en cours...</span>
                                        </div>
                                    ) : (
                                        <span>Soumettre le code</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            }
        </div>
    );
}
