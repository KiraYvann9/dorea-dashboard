import {FormComponents} from "@/app/(dashboard)/church/_components/FormComponent";
import {DataTable} from "@/components/data-table/data-table";
import {TableColumns} from "@/app/(dashboard)/church/_components/data-table-columns/TableColumns";

export default function Dashboard() {
    return(
        <div className={'flex flex-col gap-y-4'}>
            <h1 className={'text-3xl font-semibold text-gray-700'}>Eglises</h1>

            <div className={'w-full border rounded-md bg-white p-4'}>
                <FormComponents/>
            </div>
            <div className={'flex-1 w-full min-h-full border rounded-md bg-white p-4 space-y-16'}>
                <h3 className={'text-2xl font-semibold text-muted-foreground'}>Liste des églises</h3>

                <DataTable columns={TableColumns} data={[]}/>
            </div>
        </div>
    )
}