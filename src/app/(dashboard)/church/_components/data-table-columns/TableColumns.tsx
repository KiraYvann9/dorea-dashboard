'use client'

import { ColumnDef } from "@tanstack/react-table";
import {ColumnsSchema} from './ColumnsSchema'

export const TableColumns: ColumnDef<ColumnsSchema>[] = [
    {
        accessorKey: "status",
        header: "Nom de l'église",
    },
    {
        accessorKey: "email",
        header: "Commune",
    },
    {
        accessorKey: "amount",
        header: "Nom & Prénoms du pasteur",
    },
    {
        accessorKey: "number",
        header: "N° Téléphone",
    },
]