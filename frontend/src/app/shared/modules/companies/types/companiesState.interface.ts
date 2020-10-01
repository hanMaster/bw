import {RussCompany} from '../../../../models/russCompany';

export interface CompaniesStateInterface{
  isSubmitting: boolean;
  isLoading: boolean;
  companies: RussCompany[];
  validationErrors: string[] | null;
  isPopupVisible: boolean;
  isShowPopupVisible: boolean;
  company: RussCompany | null;
  editMode: boolean;
}
