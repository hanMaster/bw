<?php

namespace App\Http\Controllers;

use App\UserForCompany;
use Illuminate\Http\Request;

class UserForCompaniesController extends Controller
{
    public function assignCompany(Request $request)
    {
        $validated = $this->validate($request, [
            'user_id' => ['required'],
            'admin_company_id' => ['required']
        ]);

        $userForCompany = new UserForCompany();
        $userForCompany->fill($validated);
        $userForCompany->save();

        return response()->json($userForCompany, 201);
    }

    public function reassignCompany(Request $request, $id)
    {
        $validated = $this->validate($request, [
            'id' => ['required'],
            'user_id' => ['required'],
            'admin_company_id' => ['required']
        ]);

        $userForCompany = UserForCompany::where('user_id', $validated['user_id'])
            ->where('admin_company_id', $validated['id'])->first();
        $userForCompany->admin_company_id = $validated['admin_company_id'];
        $userForCompany->save();

        return response()->json($userForCompany, 201);
    }

}
