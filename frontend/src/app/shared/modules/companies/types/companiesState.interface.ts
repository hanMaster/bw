import {RussCompanyInterface} from '../../../../types/russCompany.interface';

export interface CompaniesStateInterface{
  isSubmitting: boolean;
  isLoading: boolean;
  companies: RussCompanyInterface[];
  validationErrors: string[] | null;
  isPopupVisible: boolean;
  isShowPopupVisible: boolean;
  company: RussCompanyInterface | null;
  editMode: boolean;
}
