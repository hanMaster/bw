import {RussCompany} from './russCompany';
import {ForeignCompany} from './foreignCompany';

export class Client {
  id?: number;
  client_name: string;
  email: string;
  password: string;
  phone_number: string;
  contact_name: string;
  russCompanies?: RussCompany[];
  forCompanies?: ForeignCompany[];
  created_at?: string;
  updated_at?: string;
}
