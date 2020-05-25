import ProductSize from './ProductSize';
declare type Product = {
    _id: string;
    _rev?: string;
    certificate?: unknown;
    customerId: string;
    docType?: number;
    name: string;
    pathImage?: string;
    pathManual?: string;
    pathVideo?: string;
    productSizes: ProductSize[];
    validity: number;
};
export default Product;
