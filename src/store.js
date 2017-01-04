import {Time} from './time'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueResource)

const state={
    view:'tabela',
    times:[],
    colunas:['nome','pontos','gm','gs','saldo'],
  
};

const mutations={
     'set-times'(state,times){
       state.times=times;
    },
    update(state,time){
        let index=state.times.findIndex(element => time.id ==element.id);
        if(index!=-1){
            state.times[index]=time;
        }
    },
    'show-time-list'(state){
       state.view='tabela';
    },
    'show-time-novojogo'(state){
        state.view='novojogo';
    },
    'show-time-libertadores'(state){
        state.view='libertadores';
    },
    'show-time-rebaixamento'(state){
         state.view='rebaixamento';
    }
}

const actions={
    'load-times'(context){
        Vue.http.get("http://localhost:8080/dist/times.json").then(response =>{
            let times = response.data.map(element=>new Time(element.id,element.name,element.escudo));
             context.commit('set-times',times);
        })
       
    }
}
export default new Vuex.Store({
    state,
    getters:{
        timesLibertadores: state => state.times.slice(0,6),
        timesRebaixamento: state => state.times.slice(16,20)
    },
    mutations,
    actions
})