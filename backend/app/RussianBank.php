<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RussianBank extends Model
{
    protected $fillable = [
        'bank_name', 'bic_code', 'corr_account'
    ];
}
