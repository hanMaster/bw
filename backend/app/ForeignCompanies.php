<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForeignCompanies extends Model
{
    protected $fillable = [
        'company_name',
        'address_line1',
        'bank_name',
        'bank_code',
        'branch_code',
        'bank_address',
        'swift_code',
        'account_number',
    ];
}
