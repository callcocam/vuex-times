import _ from 'lodash'
import store from '../store'

export default {
    template:`
        <div>
            <br>
              <input type="text" class="form-control"  v-model="filter">
              <br>
              <table class="table table-striped">
                  <thead>
                   <tr>
                      <th v-for="coluna in colunas"><a @click="orderBy(coluna)">{{ coluna | ucwords }}</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(time,index) in timesFiltered" :class="{'success': index < 3, 'warning': index > 2 && index <6, 'danger': index > 15}">
                      <td>
                          <img :src="time.escudo" style="height: 30px;width: 30px;">
                          <strong>{{ time.name }}</strong>
                      </td>
                      <td>{{ time.pontos }}</td>
                      <td>{{ time.gm }}</td>
                      <td>{{ time.gs }}</td>
                      <td>{{ time | saldo }}</td>
                  </tr>
                  </tbody>
              </table>
        </div>
    `,
    created(){
       store.dispatch('load-times');
    },
    data(){
        return {title:"Lista De Clubes Do Campeonato Brasileiro- Série A",
            order:{
                keys:['pontos','gm','gs'],
                sort:['desc','desc','asc']
            },
             filter:''
        }
    },
   
    methods:{
        showNovojogo(){
          store.commit('show-time-novojogo');
        },
        orderBy(coluna){
            this.order.keys = coluna;
            this.order.sort = this.order.sort == 'desc'? 'asc':'desc';
        }
    },
    computed:{
        times(){
            return store.state.times;
            // return this.$store.state.times;
        },
        timesFiltered(){
            let colecao =  _.orderBy(this.times, this.order.keys,this.order.sort);
            return _.filter(colecao, item =>{
                return item.name.indexOf(this.filter) >=0;
            })
        },
        colunas(){
            return store.state.colunas;
        }
    }
}