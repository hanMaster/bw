<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepositsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deposits', function (Blueprint $table) {
            $table->id();
            $table->string('admin_company_invoice_number');
            $table->string('admin_company_invoice_date');
            $table->string('payment_order_number');
            $table->string('payment_order_date');
            $table->bigInteger('admin_company_id');
            $table->bigInteger('user_company_id');
            $table->foreignId('user_id')->constrained();
            $table->enum('currency', ['usd', 'eur', 'rub']);
            $table->integer('amount');
            $table->string('payment_purpose');
            $table->string('payment_order_pdf');
            $table->enum('status', ['in processing', 'confirmed', 'canceled']);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deposits');
    }
}
