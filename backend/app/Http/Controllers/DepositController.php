<?php

namespace App\Http\Controllers;

use App\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DepositController extends Controller
{
    public function getDeposits(Request $request)
    {
        $deposits = null;
        if($request->has(['currency'])) {

            $deposits = DB::table('deposits')
                ->join('russ_companies', 'russ_companies.id', '=', 'deposits.admin_company_id')
                ->select('deposits.id','deposits.created_at','deposits.currency','deposits.amount','deposits.status','deposits.user_id', 'russ_companies.company_name', 'russ_companies.bank_name')
                ->where('deposits.user_id','=', Auth::user()->getAuthIdentifier())
                ->where('deposits.currency','=', $request['currency'])
                ->get();
        }
        return response()->json($deposits, 200);
    }

    public function addDeposit(Request $request)
    {
        $request->validate([
            'upload_file' => 'mimes:pdf,jpg,jpeg,png|max:5120',
            'admin_company_invoice_number' => ['required'],
            'admin_company_invoice_date' => ['required'],
            'payment_order_number' => ['required'],
            'payment_order_date' => ['required'],
            'admin_company_id' => ['required'],
            'user_company_id' => ['required'],
            'currency' => ['required'],
            'amount' => ['required'],
            'payment_purpose' => ['required']
        ]);

        $deposit = new Deposit();

        $deposit['status'] = 'in processing';
        $deposit['user_id'] = Auth::user()->getAuthIdentifier();
        $deposit['admin_company_invoice_number'] = $request['admin_company_invoice_number'];
        $deposit['admin_company_invoice_date'] = $request['admin_company_invoice_date'];
        $deposit['payment_order_number'] = $request['payment_order_number'];
        $deposit['payment_order_date'] = intval($request['payment_order_date']);
        $deposit['admin_company_id'] = intval($request['admin_company_id']);
        $deposit['user_company_id'] = intval($request['user_company_id']);
        $deposit['currency'] = $request['currency'];
        $deposit['amount'] = intval($request['amount']);
        $deposit['payment_purpose'] = $request['payment_purpose'];

        if ($request->hasFile('upload_file')) {
            $deposit['payment_order_pdf'] = $request['upload_file']->store('paymentOrders', 'public');
        }

        $deposit->save();

        return response()->json($deposit, 200);
    }
}
