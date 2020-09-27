<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    function index()
    {
        return User::where('role', 'client')->get();
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
}
