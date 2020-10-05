<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RussCompanies extends Model
{
    protected $fillable = [
        'company_name',
        'organization_form',
        'inn',
        'kpp',
        'reg_number',
        'law_address',
        'user_id',
        'belongs_to_admin',
        'bank_name',
        'bic_code',
        'corr_account',
        'account_number'
    ];

}
