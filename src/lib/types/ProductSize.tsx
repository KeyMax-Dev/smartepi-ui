type ProductSize = {
    _id: string;
    _rev?: string;
    code: string;
    customerId: string;
    docType?: number;
    productId: string;
    quantity?: number; // Used only to product selection
    size: string;
};

export default ProductSize;