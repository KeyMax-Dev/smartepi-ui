export declare enum WithdrawOutStatus {
    Pending = 0,
    NotSeen = 1,
    Seen = 2,
    OnWay = 3,
    Done = 4
}
declare type UserReceive = {
    costCenterId?: string;
    roleId?: string;
    sectorId: string;
    userId: string;
};
declare type Withdraw = {
    _id: string;
    _rev?: string;
    customerId: string;
    dateTime: Date;
    docType?: number;
    licenseId?: string;
    outStatus: WithdrawOutStatus;
    productSizeId: string;
    quantity: number;
    userApprovalId?: string;
    userReceive: UserReceive;
    userReleaseId?: string;
};
export default Withdraw;
