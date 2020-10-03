<?php

namespace App\Http\Controllers;

use App\ForeignAccount;
use Illuminate\Http\Request;

class ForeignAccountsController extends Controller
{
    public function getAccountsByCompanyId(Request $request)
    {
        $accounts = null;
        if ($request->has(['companyId'])) {
            $validated = $this->validate($request, [
                'companyId' => 'integer',
            ]);

            $accounts = ForeignAccount::where('beneficiary_id', $validated['companyId'])->get();
        }
        return response()->json($accounts, 200);
    }

    public function addAccount(Request $request)
    {
        $validated = $this->validate($request, [
            'account_number' => ['required'],
            'beneficiary_id' => ['required', 'integer'],
            'foreign_bank_id' => ['required', 'integer']
        ]);

        $account = new ForeignAccount();
        $account->fill($validated);
        $account->save();
        return response()->json($account, 201);
    }
    public function updateAccount(Request $request, ForeignAccount $account)
    {
        $validated = $this->validate($request, [
            'account_number' => ['required'],
            'beneficiary_id' => ['required', 'integer'],
            'foreign_bank_id' => ['required', 'integer']
        ]);

        $account->fill($validated);
        $account->save();
        return response()->json($account, 201);
    }
}
