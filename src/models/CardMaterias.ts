// o que eu vou querer do cartão w
// o ID do cartão é essencial
// as ações do cartão também são essenciais
// os anexos do cartão também são essenciais.
class CardMaterias {

    constructor(card){
        this.cardMateria = card;
    }



    get(){
        if(this.cardMateria.name.match('EXECUTIVO'))
            return this.card;
        else
            return;
    }
}

module.exports = CardMaterias;