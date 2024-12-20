export type ColumnsSchema = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string,
    number: string,
}