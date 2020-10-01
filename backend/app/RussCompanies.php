<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RussCompanies extends Model
{
    protected $fillable = [
        'company_name', 'organization_form', 'inn', 'kpp', 'reg_number', 'law_address', 'user_id'
    ];

    public function accounts()
    {
        return $this->hasMany(RussianBankAccount::class);
    }
}
