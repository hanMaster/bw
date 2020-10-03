<?php

namespace App\Http\Controllers;

use App\ForeignBank;
use Illuminate\Http\Request;

class ForeignBanksController extends Controller
{
    public function index(){
        return ForeignBank::all();
    }

    public function addBank(Request $request)
    {
        $validated = $this->validate($request, [
            'bank_name' => ['required'],
            'swift_code' => ['required', 'string', 'min:9', 'max:9'],
            'bank_address' => ['required']
        ]);
        $bank = new ForeignBank();
        $bank->fill($validated);
        $bank->save();

        return response()->json($bank, 201);
    }

    public function updateBank(Request $request, ForeignBank $bank)
    {
        $validated = $this->validate($request, [
            'bank_name' => ['required'],
            'swift_code' => ['required', 'string', 'min:9', 'max:9'],
            'bank_address' => ['required', 'string']
        ]);

        $bank->fill($validated);
        $bank->save();

        return response()->json($bank, 201);
    }
}
