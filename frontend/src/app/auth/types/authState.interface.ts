import {CurrentUser} from '../../models/currentUser';
import {BackendErrorsInterface} from '../../models/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
