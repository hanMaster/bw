<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BeneficiaryController extends Controller
{
    function index(Request $request){
        return response()->json('Here will be beneficiary for '. $request->user()->username, 200);
    }
}
