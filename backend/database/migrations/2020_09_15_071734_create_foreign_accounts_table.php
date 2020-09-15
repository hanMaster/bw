<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForeignAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foreign_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_number');
            $table->foreignId('beneficiary_id')->constrained();
            $table->foreignId('foreign_bank_id')->constrained();
            $table->timestamps();
            $table->foreign('beneficiary_id')->references('id')->on('beneficiary');
            $table->foreign('foreign_bank_id')->references('id')->on('foreign_banks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foreign_accounts');
    }
}
