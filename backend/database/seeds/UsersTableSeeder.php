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
            'client_name' => 'hanMaster',
            'email'=>'w54661c@gmail.com',
            'password'=>bcrypt('1qaz2wsx'),
            'phone_number' => '+79158762539',
            'contact_name' => 'Василий Пупкин',
            'role' => 'admin'
        ]);
        User::create([
            'client_name' => 'JohnDoe',
            'email'=>'1@1.com',
            'password'=>bcrypt('1qaz2wsx'),
            'phone_number' => '+79158762539',
            'contact_name' => 'Василий Пупкин',
            'role' => 'client'
        ]);
        User::create([
            'client_name' => 'JaneDoe',
            'email'=>'2@2.com',
            'password'=>bcrypt('1qaz2wsx'),
            'phone_number' => '+79158762539',
            'contact_name' => 'Василий Пупкин',
            'role' => 'client'
        ]);

    }
}
