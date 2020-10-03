<?php

namespace App\Http\Controllers;

use App\RussianAccount;
use Illuminate\Http\Request;

class RussianAccountsController extends Controller
{
    public function getAccountsByCompanyId(Request $request)
    {
        $accounts = null;
        if ($request->has(['companyId'])) {
            $validated = $this->validate($request, [
                'companyId' => 'integer',
            ]);

            $accounts = RussianAccount::where('russ_company_id', $validated['companyId'])->get();
        }
        return response()->json($accounts, 200);
    }

    public function addAccount(Request $request)
    {
        $validated = $this->validate($request, [
            'account_number' => ['required'],
            'russ_company_id' => ['required', 'integer'],
            'russian_bank_id' => ['required', 'integer']
        ]);

        $account = new RussianAccount();
        $account->fill($validated);
        $account->save();
        return response()->json($account, 201);
    }
    public function updateAccount(Request $request, RussianAccount $account)
    {
        $validated = $this->validate($request, [
            'account_number' => ['required'],
            'russ_company_id' => ['required', 'integer'],
            'russian_bank_id' => ['required', 'integer']
        ]);

        $account->fill($validated);
        $account->save();
        return response()->json($account, 201);
    }
}
