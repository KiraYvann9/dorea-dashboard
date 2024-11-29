import {useToast} from "@/hooks/use-toast";

class Toast{

    private title = ''
    private message = ''
    constructor(title:string, message: string){
        this.title = title;
        this.message = message
    }
}