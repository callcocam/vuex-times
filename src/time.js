/**
 * Created by Ale on 04/01/2017.
 */
export class Time{
    constructor(id,name,escudo){
        this.id=id;
        this.name=name;
        this.escudo=escudo;

        this.pontos=0;
        this.gm=0;
        this.gs=0;
    }

    updateInfo(pontos,golsMarcados,golsSofridos){
        this.pontos+=pontos;
        this.gm+=golsMarcados;
        this.gs+=golsSofridos;
    }
    fimJogo(timeAdiverssario,gols,golsAdiversarios){

        if(gols==golsAdiversarios){
            this.updateInfo(1,gols,golsAdiversarios);
            timeAdiverssario.updateInfo(1,golsAdiversarios,gols);
        }
        else{
            if(gols>golsAdiversarios){
                this.updateInfo(3,gols,golsAdiversarios);
                timeAdiverssario.updateInfo(0,golsAdiversarios,gols);
            }else{
                this.updateInfo(0,gols,golsAdiversarios);
                timeAdiverssario.updateInfo(3,golsAdiversarios,gols);
            }
        }
    }
}