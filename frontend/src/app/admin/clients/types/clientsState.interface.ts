import {BackendErrorsInterface} from '../../../types/backendErrors.interface';
import {ClientInterface} from '../../../types/client.interface';

export interface ClientsStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  clients: ClientInterface[];
  validationErrors: BackendErrorsInterface | null;
  isPopupVisible: boolean;
}
