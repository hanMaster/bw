<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('beneficiary_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->integer('amount');
            $table->string('payment_purpose');
            $table->string('invoice_pdf');
            $table->enum('currency', ['usd', 'eur']);
            $table->enum('status', ['in processing', 'completed']);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('beneficiary_id')->references('id')->on('beneficiaries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transfers');
    }
}
