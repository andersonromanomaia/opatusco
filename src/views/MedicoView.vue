<template>
  
  <div class="container">
    <h1>MÉDICO</h1>
    <router-link to="/agendamento" class="btn-cliente">Novo Agendamento</router-link>
    
    <div class="form-control">
      <label>Médico</label>
      <select @change="loadAgendamentoMedico()" v-model="this.selectMedico">
        <option v-for="medico in this.$store.state.medicos" :key="medico.nome" :value="medico.nome">{{medico.nome}}</option>
      </select>
    </div>

    <div class="rows">
      <div class="half">
          <div class="rows">
            <div class="half">
              <div class="form-control">            
                <label>Tipo do Animal</label>
                <select v-model="this.selectTipoAnimal" @change="loadAgendamentoMedico()">
                  <option v-for="tipo in this.$store.state.tipoAnimal" :key="tipo" :value="tipo">{{tipo}}</option>
                </select>
              </div>
            </div>
            <div class="half">
              <div class="form-control">
                <label>Data do Agendamento</label>
                <input type="date" placeholder="Escolha a data" v-model="this.date" @change="loadAgendamentoMedico()" /> 
              </div>
            </div>
          </div>
          <div 
          class="items" 
          v-for="item in this.$store.state.clientes" 
          :key="item.id" @click="selectItem(item)"
          :class="{itemSelected : item.id === this.esteAgendamento.id}" >
            <b>{{item.date.substring(8,10)+'/'+item.date.substring(5,6)+'/'+item.date.substring(0,3)}} | {{ item.periodo }}</b><br>
            {{ item.nomePessoa }}<br>
            {{ item.nomeAnimal }} | {{ item.tipoAnimal }} | {{ item.idade }}
          </div>
      </div>

      <div class="half">
        <form @submit.prevent="alterAgendamento">
          <div class="form-control" v-if="temAgendamento">

            <label>Nome do Cliente</label>
            <input type="text" placeholder="Preencha seu nome" class="form-control" v-model="this.esteAgendamento.nomePessoa" /> 

            <label>E-mail</label>
            <input type="email" placeholder="Preencha o e-mail" class="form-control" v-model="this.esteAgendamento.email" /> 

            <label>Nome do Animal</label>
            <input type="text" placeholder="Preencha o nome do animal" class="form-control" v-model="this.esteAgendamento.nomeAnimal" /> 

            <label>Tipo do Animal</label>
            <select v-model="this.esteAgendamento.tipoAnimal">
              <option v-for="tipo in this.$store.state.tipoAnimal" :key="tipo" :value="tipo">{{tipo}}</option>
            </select>

            <label>Idade do Animal</label>
            <input type="text" placeholder="Preencha o idade do animal" class="form-control" v-model="this.esteAgendamento.idade" /> 

            <label>Sintomas</label>
            <input type="text" placeholder="Preencha os sintomas" v-model="this.esteAgendamento.sintomas" /> 

            <label>Data do Agendamento</label>
            <input type="date" placeholder="Escolha a data" v-model="this.esteAgendamento.date" /> 

            <label>Período de Atendimento</label><br>
            <label for="periodo1"><input type="radio" name="periodo" id="periodo1" value="Manhã" class="radio" 
              v-model="this.esteAgendamento.periodo" 
              :selected = "this.esteAgendamento.periodo === 'Manhã'"
              >Manhã</label>
            <label for="periodo2"><input type="radio" name="periodo" id="periodo2" value="Tarde" class="radio" 
              v-model="this.esteAgendamento.periodo"
              :selected = "this.esteAgendamento.periodo === 'Tarde'"
              >Tarde</label> 

            <button type="submit" class="btn">Alterar</button>

          </div>
        </form>
      </div>
    </div> 

  </div>
</template>


<script>
import { mapState } from 'vuex'


export default {
  name: 'MedicoView',
  data() {
    return {
      date: "",
      temAgendamento: false,
      selectTipoAnimal: "",
      selectMedico: "",
      esteAgendamento: [{
        id: "",
        nomePessoa: "",
        email: "",
        nomeAnimal: "",
        tipoAnimal: "",
        idade: "",
        sintomas: "",
        date: null,
        periodo: "",
        medico: ""
      }],
    };
  },
  computed: mapState([
      'tipoAnimal',
      'clientes',
      'medicos' 
    ]),
  methods: {
    alterAgendamento(){
      this.$store.dispatch('alterAgendamento', this.esteAgendamento);
    },
    selectItem(item){
      this.esteAgendamento = item;
      this.temAgendamento = true;
    },
    loadAgendamentoMedico (){
      console.log(this.selectMedico, this.date, this.selectTipoAnimal);
      var dado = [{
        medico: this.selectMedico,
        date: this.date,
        tipoAnimal: this.selectTipoAnimal
      }];
      this.$store.dispatch('loadAgendamentoMedico', dado);
    }
  }
}
</script>