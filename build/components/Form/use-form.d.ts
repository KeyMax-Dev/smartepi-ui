import { FormPrototype, FormFieldProps, Form } from './types';
export declare function useForm<T extends FormPrototype>(fields: FormFieldProps<T>[]): Form<T>;
