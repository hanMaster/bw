<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForeignCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foreign_companies', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('address_line1');
            $table->string('bank_name');
            $table->integer('bank_code');
            $table->integer('branch_code');
            $table->string('bank_address');
            $table->string('swift_code');
            $table->string('account_number');
            $table->boolean('isActive')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foreign_companies');
    }
}
