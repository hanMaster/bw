<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $fillable = [
        'beneficiary_id',
        'user_id',
        'amount',
        'payment_purpose',
        'currency',
        'status',
        'invoice_pdf'
    ];
}
