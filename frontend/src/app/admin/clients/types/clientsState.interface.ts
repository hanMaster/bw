import {ClientInterface} from '../../../types/client.interface';

export interface ClientsStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  clients: ClientInterface[];
  validationErrors: string[] | null;
  isPopupVisible: boolean;
  isShowPopupVisible: boolean;
  client: ClientInterface | null;
  editMode: boolean;
}
