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
        $companies = RussCompanies::whereIn('id', UserCompany::select('admin_company_id')
            ->where('user_id', $client->id))->get();
        $client['companies'] = $companies;
        return response()->json($client, 200);
    }

    function addNewClient(Request $request)
    {
        $validated = $this->validate($request,[
            'client_name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required'],
            'phone_number' => ['required'],
            'contact_name' => ['required']
        ]);

        $client = new User();
        $client->fill($validated);
        $client->role = 'client';
        $client->save();
        return response()->json($client, 201);
    }

    function updateClient(Request $request, User $client)
    {
        $validated = $this->validate($request,[
            'id' => ['required'],
            'password' => ['required'],
            'phone_number' => ['required'],
            'contact_name' => ['required']
        ]);

        $client->fill($validated);
        if ($request->password !== "********"){
            $client->password = bcrypt($request->password);
        }
        $client->save();
        return response()->json($client, 200);

    }
}
