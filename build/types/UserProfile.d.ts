declare type UserProfile = {
    _id: string;
    _rev?: string;
    customerId: string;
    docType?: number;
    groupId: string;
    sheet?: {
        [productSizeId: string]: number[];
    };
    userId: string;
};
export default UserProfile;
