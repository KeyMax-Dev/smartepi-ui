type SectorDocStatus = '';

type Sector = {
    _id: string;
    _rev?: string;
    create_at: Date;
    customerId: string;
    docStatus?: SectorDocStatus;
    docType?: number;
    name: string;
};

export default Sector;