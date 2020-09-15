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
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        $credentials = $request->only(['email', 'password']);
        if (Auth::attempt($credentials)) {
            return response()->json(Auth::user(), 200);
        }

        throw ValidationException::withMessages([
            'auth' => ['Bad credentials']
        ]);
    }

    function logout()
    {
        Auth::logout();
    }

}
