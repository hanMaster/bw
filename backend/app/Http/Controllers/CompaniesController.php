<?php

namespace App\Http\Controllers;

use App\RussCompanies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompaniesController extends Controller
{
    public function index()
    {
        return RussCompanies::where('user_id', Auth::user()->getAuthIdentifier())->get();
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
        $company->save();

        return response()->json($company, 201);

    }

    public function updateCompany(Request $request)
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

        $company = RussCompanies::where('user_id', $request->user_id)->first();
        $company->fill($validated);
        $company->save();

        return response()->json($company, 200);

    }
}
