<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForeignBank extends Model
{
    protected $fillable = [
        'bank_name', 'bank_address', 'swift_code'
    ];

}
