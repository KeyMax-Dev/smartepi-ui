declare type Rule = {
    _id: string;
    _rev?: string;
    customerId: string;
    days: number;
    docType?: number;
    name: string;
    quantity: number;
};
export default Rule;
