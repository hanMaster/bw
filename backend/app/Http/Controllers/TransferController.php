<?php

namespace App\Http\Controllers;

use App\Transfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransferController extends Controller
{
    public function getTransfers()
    {
        $transfers  = DB::table('transfers')
                ->join('beneficiaries', 'beneficiaries.id', '=', 'transfers.beneficiary_id')
                ->select('transfers.id', 'transfers.created_at', 'transfers.currency', 'transfers.amount', 'transfers.status', 'transfers.user_id', 'beneficiaries.beneficiary_name', 'beneficiaries.bank_name')
                ->where('transfers.user_id', '=', Auth::user()->getAuthIdentifier())
                ->get();
        return response()->json($transfers, 200);
    }

    public function addTransfer(Request $request)
    {
        $request->validate([
            'currency' => ['required'],
            'upload_file' => ['mimes:pdf,jpg,jpeg,png|max:5120'],
            'beneficiary_id' => ['required'],
            'amount' => ['required'],
            'payment_purpose' => ['required']
        ]);

        $transfer = new Transfer();

        $transfer['user_id'] = Auth::user()->getAuthIdentifier();
        $transfer['beneficiary_id'] = intval($request['beneficiary_id']);
        $transfer['currency'] = $request['currency'];
        $transfer['amount'] = intval($request['amount']);
        $transfer['payment_purpose'] = $request['payment_purpose'];
        $transfer['status'] = 'in processing';

        if ($request->hasFile('upload_file')) {
            $transfer['invoice_pdf'] = $request['upload_file']->store('invoices', 'public');
        }

        $transfer->save();

        return response()->json($transfer, 201);
    }
}
