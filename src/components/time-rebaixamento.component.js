import store from '../store'

export default {
    template:`
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="coluna in colunas"><a @click="orderBy(coluna)">{{ coluna | ucwords }}</a></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="time in timesRebaixamento">
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
    computed:{
     timesRebaixamento(){
         return store.getters.timesRebaixamento;
     },
       colunas(){
          return store.state.colunas;
        }
    }
}