<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRussCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('russ_companies', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->enum('organization_form', ['ooo', 'ip']);
            $table->string('law_address');
            $table->string('inn');
            $table->string('kpp')->nullable();
            $table->string('reg_number');
            $table->boolean('belongs_to_admin');
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('russ_companies');
    }
}
