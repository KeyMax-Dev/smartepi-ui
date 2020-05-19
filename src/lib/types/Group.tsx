type ProductReference = {
    productId: string;
    ruleId: string;
};

type Group = {
    _id: string;
    _rev?: string;
    customerId: string;
    docType?: number;
    name: string;
    products:  ProductReference[];
};

export default Group;