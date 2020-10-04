<?php

namespace App\Http\Controllers;

use App\RussCompanies;
use App\User;
use App\UserCompany;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    function index()
    {
        return User::where('role', 'client')->get();
    }

    public function getClientById(User $client)
    {

        $companies = RussCompanies::whereIn('id', UserCompany::where('user_id', $client->id))->get();
//        $companies = DB::table('russian_accounts')
//            ->join('russian_banks', 'russian_banks.id', '=', 'russian_accounts.russian_bank_id')
//            ->select('russian_accounts.*', 'russian_banks.bank_name')
//            ->where('russian_accounts.russ_company_id', $company->id)
//            ->get();
//
        $client['companies'] = $companies;
        return response()->json($client, 201);
    }

    function addNewClient(Request $request)
    {
        $request->validate([
            'clientName' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required'],
            'phoneNumber' => ['required'],
            'contactName' => ['required']
        ]);

        $client = User::create([
            'client_name' => $request->clientName,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone_number' => $request->phoneNumber,
            'contact_name' => $request->contactName,
            'role' => 'client'
        ]);

        return response()->json($client, 201);
    }

    function updateClient(Request $request)
    {
        $request->validate([
            'id' => ['required'],
            'password' => ['required'],
            'phoneNumber' => ['required'],
            'contactName' => ['required']
        ]);

        $client = User::where('id', $request->id)->first();

        if ($request->password !== "********"){
            $client->password = bcrypt($request->password);
        }
        $client->phone_number = $request->phoneNumber;
        $client->contact_name = $request->contactName;
        $client->save();
        return response()->json($client, 200);

    }
}
