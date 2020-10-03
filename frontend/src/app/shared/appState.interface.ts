import {AuthStateInterface} from '../auth/types/authState.interface';
import {ClientsStateInterface} from '../admin/clients/types/clientsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  clients: ClientsStateInterface;
}
