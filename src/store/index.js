import { createStore } from 'vuex'
import { ref } from 'vue';
import axios from 'axios';


export default createStore({
  state: {
    tipoAnimal: ref(["cachorro", "gato", "coelho", "hamster", "peixe", "pássaro", "porquinho-da-índia", "tartaruga", "iguana", "furão", "chinchila", "cobra", "lagarto", "cavalo", "mini porco", "rato", "arara", "papagaio", "camaleão", "periquito"]),
    medicos: [
      {
        nome: 'Medico A',
        email: 'a@a.com'
      },
      {
        nome: 'Médico B',
        email: 'b@b.com'
      }
    ],
    clientes: []
  },
  getters: {
  },
  mutations: {
    async addAgendamento(state, newCliente) {
      console.log(newCliente.date);
      state.clientes.push(newCliente);
      let formData = new FormData();
      formData.append('nomePessoa',newCliente.nomePessoa);
      formData.append('email',newCliente.email);
      formData.append('nomeAnimal',newCliente.nomeAnimal);
      formData.append('tipoAnimal',newCliente.tipoAnimal);
      formData.append('idade',newCliente.idade);
      formData.append('sintomas',newCliente.sintomas);
      formData.append('date',newCliente.date);
      formData.append('periodo',newCliente.periodo);
      formData.append('medico',newCliente.medico);
      try { 
        const response = await axios.post("http://127.0.0.1:8000/api/addagendamento", formData, {
            headers: {
              'Content-Type': 'application/json'
            }
            });
          this.responseMessage = "Dados enviados com sucesso!"+response.data;
      } catch (error) {
        this.responseMessage = "Ocorreu um erro ao enviar os dados.";
        console.error(error);
      }
    },
    async alterAgendamento(state, newCliente) {
      let formData = new FormData();
      formData.append('id',newCliente.id);
      formData.append('nomePessoa',newCliente.nomePessoa);
      formData.append('email',newCliente.email);
      formData.append('nomeAnimal',newCliente.nomeAnimal);
      formData.append('tipoAnimal',newCliente.tipoAnimal);
      formData.append('idade',newCliente.idade);
      formData.append('sintomas',newCliente.sintomas);
      formData.append('date',newCliente.date);
      formData.append('periodo',newCliente.periodo);
      formData.append('medico',newCliente.medico);
      try { 
        const response = await axios.post("http://127.0.0.1:8000/api/alteragendamento", formData, {
            headers: {
              'Content-Type': 'application/json'
            }
            });
          this.responseMessage = "Dados enviados com sucesso!"+response.data;
      } catch (error) {
        this.responseMessage = "Ocorreu um erro ao enviar os dados.";
        console.error(error);
      }
    },
    async deleteAgendamento(state, newCliente) {
      var updatedCliente = state.clientes.filter(item => newCliente.id != item.id);
      state.clientes = updatedCliente;
      let formData = new FormData();
      formData.append('id',newCliente.id);
      try { 
        const response = await axios.delete("http://127.0.0.1:8000/api/deleteagendamento/"+newCliente.id);
          this.responseMessage = "Dados enviados com sucesso!"+response.data;
      } catch (error) {
        this.responseMessage = "Ocorreu um erro ao enviar os dados.";
        console.error(error);
      }
    },
    loadAgendamento(state, clientes){
      state.clientes = clientes;
    }
  },
  actions: {
    addAgendamento({ commit }, newCliente) {
      commit('addAgendamento', newCliente);
    },
    alterAgendamento({ commit }, newCliente) {
      commit('alterAgendamento', newCliente);
    },
    deleteAgendamento({ commit }, agendamentoId) {
      if (confirm('Você tem certeza que deseja excluir esse agendamento?')) {
        commit('deleteAgendamento', agendamentoId);
      }
    },
    async loadAgendamentoMedico({ commit }, dado){
      try { 
        const response = await axios.get("http://127.0.0.1:8000/api/loadagendamentomedico?tipoAnimal="+dado[0].tipoAnimal+"&date="+dado[0].date+"&medico="+dado[0].medico);
          this.responseMessage = "Dados enviados com sucesso!";
          commit('loadAgendamento',response.data);
      } catch (error) {
        this.responseMessage = "Ocorreu um erro ao enviar os dados.";
        console.error(error);
      }
    },
    async loadAgendamentoRecepcionista({ commit }, dado){
      try { 
        const response = await axios.get("http://127.0.0.1:8000/api/loadagendamentorecepcionista?tipoAnimal="+dado[0].tipoAnimal+"&date="+dado[0].date);
          this.responseMessage = "Dados enviados com sucesso!";
          commit('loadAgendamento',response.data);
      } catch (error) {
        this.responseMessage = "Ocorreu um erro ao enviar os dados.";
        console.error(error);
      }
    }
  },
  modules: {
  }
})
