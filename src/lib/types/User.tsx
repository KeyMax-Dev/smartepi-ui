enum UserPermission {
    WITHDRAW = 1,
    SUPPLY = 2,
    APPROVE = 3,
    RELEASE_LICENSE = 4,
    WEB_SUPPLY = 5,
    WEB_ADMIN = 6,
    ADMIN = 7
}

type UserStatus = '';

type Fingerprint = {
    finger: string;
    data: string;
}

type User = {
    _id: string;
    _rev?: string;
    admissionDate: Date;
    fingerprint?: Fingerprint[];
    costCenterId?: string[];
    customerId: string;
    docType?: number;
    email?: string;
    identification: string;
    name: string;
    password: string;
    permission: UserPermission[];
    roleId?: string;
    sectorId: string;
    userStatus: UserStatus;
};

export default User;