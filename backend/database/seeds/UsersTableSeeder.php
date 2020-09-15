<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'hanMaster',
            'email'=>'w54661c@gmail.com',
            'password'=>bcrypt('1qaz2wsx'),
            'phone_number' => '+79158762539',
            'contact_name' => 'Василий Пупкин'
        ]);
    }
}
