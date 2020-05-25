declare type ProductReference = {
    productId: string;
    ruleId: string;
};
declare type Group = {
    _id: string;
    _rev?: string;
    customerId: string;
    docType?: number;
    name: string;
    products: ProductReference[];
};
export default Group;
