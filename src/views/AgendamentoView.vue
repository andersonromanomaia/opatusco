<template>
  <div class="container">
    <h1>NOVO AGENDAMENTO</h1>
    <div class="form-control">
      <form @submit.prevent="addAgendamento">
        <label>Nome do Cliente</label>
        <input type="text" placeholder="Preencha seu nome" class="form-control" v-model="this.newCliente.nomePessoa" /> 
        
        <label>E-mail</label>
        <input type="email" placeholder="Preencha o e-mail" class="form-control" v-model="this.newCliente.email" /> 

        <label>Nome do Animal</label>
        <input type="text" placeholder="Preencha o nome do animal" class="form-control" v-model="this.newCliente.nomeAnimal" /> 

        <label>Tipo do Animal</label>
        <select v-model="this.newCliente.tipoAnimal">
          <option v-for="tipo in this.$store.state.tipoAnimal" :key="tipo" :value="tipo">{{tipo}}</option>
        </select>

        <label>Idade do Animal</label>
        <input type="text" placeholder="Preencha o idade do animal" class="form-control" v-model="this.newCliente.idade" /> 

        <label>Sintomas</label>
        <input type="text" placeholder="Preencha os sintomas" v-model="this.newCliente.sintomas" /> 

        <label>Data do Agendamento</label>
        <input type="date" placeholder="Escolha a data" v-model="this.newCliente.date" /> 

        <label>Período de Atendimento</label><br>
        <label for="periodo1"><input type="radio" name="periodo" id="periodo1" value="Manhã" class="radio" v-model="this.newCliente.periodo">Manhã</label>
        <label for="periodo2"><input type="radio" name="periodo" id="periodo2" value="Tarde" class="radio" v-model="this.newCliente.periodo">Tarde</label> 

        <!-- <button type="button" class="btn" @click="addAgendamento(newCliente)">Agendar</button> -->
        <button type="submit" class="btn">Agendar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import axios from 'axios';

export default {
  name: 'AgendamentoView',
  data() {
    return {
      newCliente: [{
        nomePessoa: "",
        email: "",
        nomeAnimal: "",
        tipoAnimal: "",
        idade: "",
        sintomas: "",
        date: null,
        periodo: "",
        medico: ""
      }]
    };
  },
  computed: mapState([
    'tipoAnimal'
  ]),

  methods: {
    addAgendamento(){
      console.log(this.newCliente);
      this.$store.dispatch('addAgendamento', this.newCliente);
      this.newCliente = [];
    }
  }
}
</script>