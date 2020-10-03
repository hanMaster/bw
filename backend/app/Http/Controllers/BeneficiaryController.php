<?php

namespace App\Http\Controllers;

use App\Beneficiary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BeneficiaryController extends Controller
{
    function index()
    {
        $beneficiaries = Beneficiary::where('user_id', Auth::user()->getAuthIdentifier())->get();
        return response()->json($beneficiaries, 200);
    }

    public function getBeneficiaryById(Beneficiary $beneficiary)
    {

        $accounts = DB::table('foreign_accounts')
            ->join('foreign_banks', 'foreign_banks.id', '=', 'foreign_accounts.foreign_bank_id')
            ->select('foreign_accounts.*', 'foreign_banks.bank_name')
            ->where('foreign_accounts.beneficiary_id', $beneficiary->id)
            ->get();

        $beneficiary['accounts'] = $accounts;
        return response()->json($beneficiary, 201);
    }

    public function addNewBeneficiary(Request $request)
    {
        $validated = $this->validate($request, [
            'beneficiary_name' => ['required'],
            'address_line1' => ['required'],
            'address_line2' => [],
            'address_line3' => [],
            'beneficiary_email_www' => ['required'],
            'contact_email' => ['required'],
            'user_id' => ['required']
        ]);

        $beneficiary = new Beneficiary();
        $beneficiary->fill($validated);
        $beneficiary->save();

        return response()->json($beneficiary, 201);

    }

    public function updateBeneficiary(Request $request, Beneficiary $beneficiary)
    {
        $validated = $this->validate($request, [
            'beneficiary_name' => ['required'],
            'address_line1' => ['required'],
            'address_line2' => [],
            'address_line3' => [],
            'beneficiary_email_www' => ['required'],
            'contact_email' => ['required'],
            'id' => ['required']
        ]);

        $beneficiary->fill($validated);
        $beneficiary->save();

        return response()->json($beneficiary, 200);

    }
}
