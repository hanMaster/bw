<?php

namespace App\Http\Controllers;

use App\ForeignCompanies;
use App\UserCompany;
use App\UserForCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ForeignCompaniesController extends Controller
{
    public function index(Request $request)
    {
        $user_id = Auth::user()->getAuthIdentifier();
        if($request->has(['assigned'])) {
            $companies = ForeignCompanies::select('id','company_name')
                ->whereIn('id', UserForCompany::select('admin_company_id')->where('user_id', $user_id))->get();
            return response()->json($companies, 200);
        }
        return ForeignCompanies::all();
    }

    public function getCompanyById(ForeignCompanies $company)
    {
        return response()->json($company, 201);
    }

    public function addNewCompany(Request $request)
    {
        $validated = $this->validate($request, [
            'company_name' => ['required'],
            'address_line1' => ['required'],
            'bank_name' => ['required'],
            'bank_code' => ['required'],
            'branch_code' => ['required'],
            'bank_address' => ['required'],
            'swift_code' => ['required'],
            'account_number' => ['required']
        ]);

        $company = new ForeignCompanies();
        $company->fill($validated);
        $company->save();

        return response()->json($company, 201);
    }

    public function updateCompany(Request $request, ForeignCompanies $company)
    {
        $validated = $this->validate($request, [
            'company_name' => ['required'],
            'address_line1' => ['required'],
            'bank_name' => ['required'],
            'bank_code' => ['required'],
            'branch_code' => ['required'],
            'bank_address' => ['required'],
            'swift_code' => ['required'],
            'account_number' => ['required']
        ]);

        $company->fill($validated);
        $company->save();

        return response()->json($company, 200);

    }
}
