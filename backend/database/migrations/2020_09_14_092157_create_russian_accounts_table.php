<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRussianAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('russian_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_number');
            $table->foreignId('russ_company_id')->constrained();
            $table->foreignId('russian_bank_id')->constrained();
            $table->timestamps();
            $table->foreign('russ_company_id')->references('id')->on('russ_companies');
            $table->foreign('russian_bank_id')->references('id')->on('russian_banks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('russian_accounts');
    }
}
