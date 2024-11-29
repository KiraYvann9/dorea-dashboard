import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Lottie from "lottie-react"
import { Check } from "lucide-react"
import checkedAnimation from './checked-animation.json';
import Link from "next/link";
import { FC } from "react";

interface SuccefullyProcessCardProps {
    className ?: string;
    messageTitle: string;
    messageContent: string;
    href?: string;
}

const SuccefullyProcessCard: FC<SuccefullyProcessCardProps> = ({
                                                                   className = '',
                                                                   messageContent,
                                                                   messageTitle,
                                                                   href = '/'
                                                               }) => {
    return (
        <div className={`w-auto h-auto flex flex-col items-center ${className}`}>
            <Alert className="border border-green-600 bg-green-600/20 text-green-700">
                <Check className="h-4 w-4 text-green-700"  size={38}/>
                <AlertTitle className="font-semibold text-xl tracking-wide">{messageTitle}</AlertTitle>
                <AlertDescription>
                    {messageContent}
                </AlertDescription>
            </Alert>
            <div className="w-72 h-auto">
                <Lottie animationData={checkedAnimation} loop={true} className=" p-0 bg-transparent"/>
            </div>
            <Link href={href} className="text-xl rounded-md px-4 py-2 font-semibold border">Accéder à mon espace</Link>
        </div>
    )
}

export default SuccefullyProcessCard