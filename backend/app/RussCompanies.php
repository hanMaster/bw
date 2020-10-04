<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RussCompanies extends Model
{
    protected $fillable = [
        'company_name', 'organization_form', 'inn', 'kpp', 'reg_number', 'law_address', 'user_id', 'belongs_to_admin'
    ];

    public function accounts()
    {
        return $this->hasMany(RussianAccount::class, 'russ_company_id');
    }
}
