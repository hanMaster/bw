<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RussianAccount extends Model
{
    protected $fillable = [
        'account_number', 'russ_company_id', 'russian_bank_id'
    ];

    public function companies()
    {
        return $this->belongsToMany(RussCompanies::class, 'russ_companies', 'russ_company_id');
    }
}
