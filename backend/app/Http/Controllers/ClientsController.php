<?php

namespace App\Http\Controllers;

use App\User;
use http\Env\Request;

class ClientsController extends Controller
{
    function index()
    {
        return User::where('role', 'client')->get();
    }

    function addNewClient(Request $request)
    {
        $request->validate([
            'client_name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required'],
            'phone_number' => ['required'],
            'contact_name' => ['required']
        ]);

        $client = User::create([
            'client_name' => $request->client_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone_number' => $request->phone_number,
            'contact_name' => $request->contact_name,
            'role' => 'client'
        ]);

        return response()->json($client, 201);
    }
}
