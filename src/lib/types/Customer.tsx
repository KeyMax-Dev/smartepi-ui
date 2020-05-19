
type Customer = {
    _id: string;
    _rev?: string;
    cnpj: string;
    docType?: number;
    docStatus?: number;
    fancyName: string;
    licenses: number;
}

export default Customer;