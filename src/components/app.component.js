import TimeJogoComponent from './time-jogo.component';
import TimeListComponent from './time-list.component';
import TimesLibertadores from './time-libertadores.component'
import store from '../store'
import timesRebaixamento from './time-rebaixamento.component'

export default {
    components:{
        'timelist' : TimeListComponent,
        'timejogo' : TimeJogoComponent,
        'times-libertadores':TimesLibertadores,
        'times-rebaixamento': timesRebaixamento
    },
    template:`
    <div class="container"><div class="row">
          <h3>{{ title }}</h3>
          <br>
          <a @click="showNovojogo" class="btn btn-primary">Novo Jogo</a>
           <a @click="showTabela" class="btn btn-warning">Tabela Completa</a>
            <a @click="showLibertadores" class="btn btn-success">Libertadore</a>
             <a @click="showRebaixamento" class="btn btn-danger">Zona De Rebaixamento</a>
          <br>
          <div v-if="view == 'tabela'">
           <timelist></timelist>
          </div>
            <div  v-if="view == 'rebaixamento'">
                <br>
                <times-rebaixamento></times-rebaixamento>
            </div>

            <div  v-if="view == 'libertadores'">
                <br>
                <times-libertadores></times-libertadores>
            </div>
          
          <div  v-if="view == 'novojogo'">
              <br>
            <timejogo></timejogo>
          </div>
    </div>
    `,
    data(){
        return {
            title:"Lista De Clubes Do Campeonato Brasileiro- Série A"

        }
    },
      methods:{
        showNovojogo(){
            store.commit('show-time-novojogo');
        },
            showTabela(){
            store.commit('show-time-list');
        },
            showLibertadores(){
            store.commit('show-time-libertadores');
        },
            showRebaixamento(){
            store.commit('show-time-rebaixamento');
        }
    },
    computed:{
          view(){
              return store.state.view;
            //   return this.$store.state.times;
          }
    }
}