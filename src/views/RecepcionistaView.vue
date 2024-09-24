<template>
  
  <div class="container">
    <h1>RECEPCIONISTA</h1>
    <router-link to="/agendamento" class="btn-cliente">Novo Agendamento</router-link>
    
    <div class="rows">
      <div class="half">
          <div class="rows">
            <div class="half">
              <div class="form-control">            
                <label>Tipo do Animal</label>
                <select v-model="this.selectTipoAnimal" @change="loadAgendamentoRecepcionista()">
                  <option v-for="tipo in this.$store.state.tipoAnimal" :key="tipo" :value="tipo">{{tipo}}</option>
                </select>
              </div>
            </div>
            <div class="half">
              <div class="form-control">
                <label>Data do Agendamento</label>
                <input type="date" placeholder="Escolha a data" v-model="this.date" @change="loadAgendamentoRecepcionista()" /> 
              </div>
            </div>
          </div>
          <div 
          class="items" 
          v-for="item in this.$store.state.clientes" 
          :key="item.id" @click="selectItem(item)"
          :class="{itemSelected : item.id === this.esteAgendamento.id}" > <!-- 2024-09-24 -->
            <b>{{item.date.substring(8,10)+'/'+item.date.substring(5,7)+'/'+item.date.substring(0,4)}} | {{ item.periodo }}</b><br>
            {{ item.nomePessoa }}<br>
            {{ item.nomeAnimal }} | {{ item.tipoAnimal }} | {{ item.idade }}
          </div>
      </div>
      <div class="half">
          <div class="form-control" v-if="temAgendamento">

          <form @submit.prevent="alterAgendamento">
            <label>Médico</label>
            <select v-model="this.esteAgendamento.medico">
              <option v-for="medico in this.$store.state.medicos" :key="medico.nome" :value="medico.nome">{{medico.nome}}</option>
            </select>

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

            <button type="submit" class="btn">Alterar</button><br><br><br>
            <button type="button" class="btnDelete" @click="this.$store.dispatch('deleteAgendamento', this.esteAgendamento); this.temAgendamento = !this.temAgendamento">Excluir</button>
          </form>
          </div>
      </div>
    </div>
    

  </div>
</template>


<script>
import { mapState } from 'vuex'


export default {
  name: 'RecepcionistaView',
  data() {
    return {
      date: "",
      temAgendamento: false,
      selectTipoAnimal: "",
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
      }]
    };
  },
  computed: 
    mapState([
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
    loadAgendamentoRecepcionista (){
      let dado = [{
        date: this.date,
        tipoAnimal: this.selectTipoAnimal
      }];
      this.$store.dispatch('loadAgendamentoRecepcionista', dado);
    }
  }
}
</script>