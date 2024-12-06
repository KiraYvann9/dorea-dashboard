
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {FormComponents} from "@/app/(dashboard)/teams/_components/FormComponent";
import {DepartementForm} from "@/app/(dashboard)/teams/_components/DepartementForm";
import {RoleForm} from "@/app/(dashboard)/teams/_components/RoleForm";


export default function Dashboard() {
    return(
        <div className={'flex flex-col gap-y-10'}>

            <h1 className={'text-3xl font-semibold text-gray-700'}>Equipe & Départements</h1>

            <Tabs defaultValue={'equipes'} className={'w-full '}>

                <TabsList className={'w-full flex justify-start rounded-none bg-gray-200 border-b-2 border-custom_dark'}>
                    <TabsTrigger value={'equipes'} className={'text-xl sm:px-6'}>Equipes</TabsTrigger>
                    <TabsTrigger value={'departements'} className={'text-xl sm:px-6'}>Départements</TabsTrigger>
                    <TabsTrigger value={'roles'} className={'text-xl sm:px-6'}>Roles</TabsTrigger>
                </TabsList>

                <TabsContent value={'equipes'} className={'px-6 space-y-8'}>
                    <FormComponents/>
                    <div className={'flex-1 w-full rounded-md bg-white space-y-16'}>
                        <h3 className={'text-2xl font-semibold text-muted-foreground'}>Liste des membres de l'équipe</h3>
                    </div>
                </TabsContent>

                <TabsContent value={'departements'} className={'px-6 space-y-8'}>
                    <DepartementForm/>
                    <div className={'flex-1 w-full rounded-md bg-white space-y-16'}>
                        <h3 className={'text-2xl font-semibold text-muted-foreground'}>Liste des départements</h3>
                    </div>
                </TabsContent>

                <TabsContent value={'roles'} className={'px-6 space-y-8'}>
                    <RoleForm/>
                    <div className={'flex-1 w-full rounded-md bg-white space-y-16'}>
                        <h3 className={'text-2xl font-semibold text-muted-foreground'}>Liste des Roles</h3>
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}