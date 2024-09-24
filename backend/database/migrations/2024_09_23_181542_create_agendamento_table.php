<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agendamentos', function (Blueprint $table) {
            $table->id();
            $table->string('nomePessoa');
            $table->string('email');
            $table->string('nomeAnimal');
            $table->string('tipoAnimal');
            $table->string('idade');
            $table->string('sintomas');
            $table->string('date');
            $table->string('periodo');
            $table->string('medico');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agendamentos');
    }
};
