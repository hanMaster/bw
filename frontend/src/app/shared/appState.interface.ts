import {AuthStateInterface} from '../auth/types/authState.interface';
import {ClientsStateInterface} from '../admin/clients/types/clientsState.interface';
import {CompaniesStateInterface} from './modules/companies/types/companiesState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  clients: ClientsStateInterface;
  companies: CompaniesStateInterface;
}
