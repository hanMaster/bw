<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!isset($user) || !password_verify($request->password, $user->password)) {
            return response([
                "message" => "Credentials doesn't mush"
            ], 401);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    function revoke(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $user->tokens()->delete();
        return response([
            "message" => "Tokens removed"
        ], 200);
    }
}
