<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function uploadFile(Request $request)
    {
        $request->validate([
            'upload_file' => 'mimes:pdf,jpg,jpeg,png|max:5120',
        ]);

        if ($request->hasFile('upload_file')) {
            $request['upload_file']->store('paymentOrders', 'public');
        }
        return response()->json('Successful upload', 200);
    }
}
