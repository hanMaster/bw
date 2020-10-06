<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deposit extends Model
{
    protected $fillable = [
        'admin_company_invoice_number',
        'admin_company_invoice_date',
        'payment_order_number',
        'payment_order_date',
        'admin_company_id',
        'user_company_id',
        'user_id',
        'currency',
        'amount',
        'payment_purpose',
        'payment_order_pdf',
        'status'
    ];
}
