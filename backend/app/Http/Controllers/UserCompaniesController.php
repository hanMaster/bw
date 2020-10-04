<?php

namespace App\Http\Controllers;

use App\UserCompany;
use Illuminate\Http\Request;

class UserCompaniesController extends Controller
{
    public function assignCompany(Request $request)
    {
        $validated = $this->validate($request, [
            'user_id' => ['required'],
            'admin_company_id' => ['required']
        ]);

        $userCompany = new UserCompany();
        $userCompany->fill($validated);
        $userCompany->save();

        return response()->json($userCompany, 201);
    }

    public function reassignCompany(Request $request, $id)
    {
        $validated = $this->validate($request, [
            'id' => ['required'],
            'user_id' => ['required'],
            'admin_company_id' => ['required']
        ]);

        $userCompany = UserCompany::where('user_id', $validated['user_id'])
            ->where('admin_company_id', $validated['id'])->first();
        $userCompany->admin_company_id = $validated['admin_company_id'];
        $userCompany->save();

        return response()->json($userCompany, 201);
    }


}
