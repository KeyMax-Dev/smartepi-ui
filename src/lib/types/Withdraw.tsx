enum WithdrawOutStatus {
    Pending,
    NotSeen,
    Seen,
    OnWay,
    Done
}

type UserReceive = { 
    costCenterId?: string;
    roleId?: string;
    sectorId: string;
    userId: string;
}

type Withdraw = {
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