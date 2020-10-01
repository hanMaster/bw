<?php

namespace App\Http\Controllers;

use App\RussianBank;
use Illuminate\Http\Request;

class RussianBanksController extends Controller
{
    public function index(){
        return RussianBank::all();
    }

    public function addBank(Request $request)
    {
        $validated = $this->validate($request, [
            'bank_name' => ['required'],
            'bic_code' => ['required', 'string', 'min:9', 'max:9'],
            'corr_account' => ['required']
        ]);
        $bank = new RussianBank();
        $bank->fill($validated);
        $bank->save();

        return response()->json($bank, 201);
    }

    public function updateBank(Request $request, RussianBank $bank)
    {
        $validated = $this->validate($request, [
            'bank_name' => ['required'],
            'bic_code' => ['required', 'string', 'min:9', 'max:9'],
            'corr_account' => ['required', 'string', 'min:9', 'max:9']
        ]);

        $bank->fill($validated);
        $bank->save();

        return response()->json($bank, 201);
    }

}
