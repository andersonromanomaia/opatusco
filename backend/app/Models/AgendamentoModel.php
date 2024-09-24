<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgendamentoModel extends Model
{
    use HasFactory;

    protected $table = "agendamentos";

    protected $fillable = [
        'nomePessoa',
        'email',
        'nomeAnimal',
        'tipoAnimal',
        'idade',
        'sintomas',
        'date',
        'periodo',
        'medico',
    ];
}
