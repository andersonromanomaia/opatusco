<?php

namespace App\Http\Controllers;

use App\Models\AgendamentoModel;
use Illuminate\Http\Request;

class AgendamentoController extends Controller
{
    function addagendamento(Request $request){
        // $resultado = AgendamentoModel::create($request->all());
        // return $resultado;
        // return [ "request" => $request->medico ];
        $data = new AgendamentoModel();
        $data->nomePessoa = $request->nomePessoa;
        $data->email = $request->email;
        $data->nomeAnimal = $request->nomeAnimal;
        $data->tipoAnimal = $request->tipoAnimal;
        $data->idade = $request->idade;
        $data->sintomas = $request->sintomas;
        $data->date = $request->date;
        $data->periodo = $request->periodo;
        $data->medico = "";
        $data->save();
        return [
            "msg" => 'Agendamento cadastrado com sucesso'
       ];
    }

    function loadagendamentorecepcionista(Request $request){
        // $return = AgendamentoModel::all();
        $return = AgendamentoModel::where('tipoAnimal',$request->query('tipoAnimal'))->where('date',$request->query('date'))->get();

        return $return;
    }

    function loadagendamentomedico(Request $request){
        // $return = AgendamentoModel::all();
        $return = AgendamentoModel::where('tipoAnimal',$request->query('tipoAnimal'))
        ->where('date',$request->query('date'))
        ->where('medico',$request->query('medico'))
        ->get();

        return $return;
    }

    function alteragendamento(Request $request){
        AgendamentoModel::where('id',$request->id)
            ->update([
            'nomePessoa' => $request->nomePessoa,
            'email' => $request->email,
            'nomeAnimal' => $request->nomeAnimal,
            'tipoAnimal' => $request->tipoAnimal,
            'idade' => $request->idade,
            'sintomas' => $request->sintomas,
            'date' => $request->date,
            'periodo' => $request->periodo,
            'medico' => $request->medico,
            ]);
            return [
                "msg" => 'Agendamento alterado com sucesso'
            ];
    }

    function deleteagendamento($id){
        AgendamentoModel::where('id',$id)
            ->delete();
            return [
                "msg" => 'Agendamento excluído com sucesso'
            ];
    }
}
