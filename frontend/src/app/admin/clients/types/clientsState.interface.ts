import {Client} from '../../../models/client';

export interface ClientsStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  clients: Client[];
  validationErrors: string[] | null;
  isPopupVisible: boolean;
  isShowPopupVisible: boolean;
  client: Client | null;
  editMode: boolean;
}
