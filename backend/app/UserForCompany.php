<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserForCompany extends Model
{
    protected $fillable = [
        'user_id','admin_company_id'
    ];
}
