import DocumentType from '../../electron/src/app/enums/document-type.enum';

type Customer = {
    _id: string;
    _rev?: string;
    cnpj: string;
    docType?: DocumentType;
    docStatus?: number;
    fancyName: string;
    licenses: number;
}

export default Customer;