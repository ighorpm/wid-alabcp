const apiHts = 'https://api.totalvoice.com.br'
const axios = require('axios');


module.exports.criarConferencia = (firstnumber, lastnumber, token) => {
    return new Promise((resolve, reject) => {
        this.criarNovaConferencia(token)
        .then((id) => {
                this.adicionarNumeroConferencia(id, firstnumber, token);
                this.adicionarNumeroConferencia(id, lastnumber, token);
            resolve('conferencia entre dois numeros criadas com sucesso')
        })

        return reject('Não foi possível chamar o servidor.')
    })
}
module.exports.adicionarNumeroConferencia = (conferenciaId, number, token) => {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                'Access-Token': token,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            },
            method: 'post',
            url: apiHts+'/conferencia/'+conferenciaId,
            data: {'numero': number},
        })
        .then((res) => {
            resolve(res.data.dados.id);
         })
        return reject('id não encontrado!')
    })
}
// Retorna id da conferencia
module.exports.criarNovaConferencia = (token) => {
    return new Promise((resolve, reject) => {
            axios({
                headers: {
                    'Access-Token': token,
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                method: 'post',
                url: apiHts+'/conferencia',
                data: data,
            })
            .then((res) => {
                resolve(res.data.dados.id);
        })
        reject('Não foi possível chamar o servidor.')
    })
}

