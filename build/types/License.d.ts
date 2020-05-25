export declare enum LicenseStatus {
    ACTIVE = 1,
    INACTIVE = 2,
    CANCELED = 3
}
declare type License = {
    _id: string;
    _rev?: string;
    code: string;
    customerId: string;
    docType?: number;
    host: string;
    licenseStatus: LicenseStatus;
    mac: string;
    name: string;
};
export default License;
