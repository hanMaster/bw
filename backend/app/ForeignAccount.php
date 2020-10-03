<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForeignAccount extends Model
{
    protected $fillable = [
        'account_number', 'beneficiary_id', 'foreign_bank_id'
    ];
}
