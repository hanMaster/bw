<?php

namespace App\Http\Controllers;

use App\RussCompanies;
use App\UserCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CompaniesController extends Controller
{
    public function index(Request $request)
    {
        $user_id = Auth::user()->getAuthIdentifier();
        if($request->has(['assigned'])) {
            $companies = RussCompanies::select('id','company_name')->whereIn('id', UserCompany::select('admin_company_id')->where('user_id', $user_id))->get();
            return response()->json($companies, 200);
        }
        if($request->has(['client'])) {
            $companies = RussCompanies::select('id','company_name')->where('user_id', $user_id)->get();
            return response()->json($companies, 200);
        }

        return RussCompanies::where('user_id', $user_id)->get();
    }

    public function getAll()
    {
        return RussCompanies::all();
    }

    public function getCompanyById(RussCompanies $company)
    {

        $accounts = DB::table('russian_accounts')
            ->join('russian_banks', 'russian_banks.id', '=', 'russian_accounts.russian_bank_id')
            ->select('russian_accounts.*', 'russian_banks.bank_name')
            ->where('russian_accounts.russ_company_id', $company->id)
            ->get();

        $company['accounts'] = $accounts;
        return response()->json($company, 201);
    }

    public function addNewCompany(Request $request)
    {
        $validated = $this->validate($request, [
            'company_name' => ['required'],
            'organization_form' => ['required'],
            'inn' => ['required'],
            'kpp' => ['required'],
            'reg_number' => ['required'],
            'law_address' => ['required'],
            'user_id' => ['required']
        ]);

        $company = new RussCompanies();
        $company->fill($validated);
        if(Auth::user()->getRole() === 'admin')
        {
            $company->belongs_to_admin = true;
        }else{
            $company->belongs_to_admin = false;
        }
        $company->save();

        return response()->json($company, 201);

    }

    public function updateCompany(Request $request, RussCompanies $company)
    {
        $validated = $this->validate($request, [
            'company_name' => ['required'],
            'organization_form' => ['required'],
            'inn' => ['required'],
            'kpp' => ['required'],
            'reg_number' => ['required'],
            'law_address' => ['required'],
            'id' => ['required']
        ]);

        $company->fill($validated);
        $company->save();

        return response()->json($company, 200);

    }
}
