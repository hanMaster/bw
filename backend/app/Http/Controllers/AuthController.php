<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        $credentials = $request->only(['username', 'password']);
        if (Auth::attempt($credentials)) {
            return response()->json(Auth::user(), 200);
        } else {
            return response()->json(["auth" => "Bad credentials"], 422);
        }

//        throw ValidationException::withMessages([
//            'auth' => 'Something went wrong'
//        ]);
    }

    function logout()
    {
        Auth::logout();
    }

}
