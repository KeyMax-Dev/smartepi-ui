
type OrderStatus = '';

type Order = {
    _id: string;
    _rev?: string;
    customerId: string;
    docType?: number;
    licenseId?: string;
    orderStatus: OrderStatus;
    userId: string;
    withdrawalId: string[];
};

export default Order;