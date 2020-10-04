import {RussCompany} from './russCompany';

export class Client {
  id?: number;
  client_name: string;
  email: string;
  password: string;
  phone_number: string;
  contact_name: string;
  companies?: RussCompany[];
  created_at?: string;
  updated_at?: string;
}
