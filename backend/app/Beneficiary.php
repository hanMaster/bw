<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Beneficiary extends Model
{
    protected $fillable = [
        'beneficiary_alias',
        'beneficiary_name',
        'address_line1',
        'address_line2',
        'address_line3',
        'beneficiary_email_www',
        'contact_email',
        'user_id',
        'bank_name',
        'swift_code',
        'bank_address',
        'account_number'
    ];
}
