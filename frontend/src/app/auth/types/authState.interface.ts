import {CurrentUserInterface} from '../../types/currentUser.interface';
import {BackendErrorsInterface} from '../../types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
