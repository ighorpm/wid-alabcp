const DatabaseService = require('../services/DatabaseService');
const TotalVoiceService = require('../services/TotalVoiceService')
const config = require('../../config.json');
module.exports = {
    async index(req, res) {
        return DatabaseService.find(req.params.id)
                .then((result) => {
                    return res.status(200).json({'message': 'lista de casas', 'data': result});
                }).catch(() => {
                    return res.status(500).json({'message': 'Erro ao listar casas'});
                })
    },
    async call(req, res) {
        try {
            const token = config.token;
            if((!req.body.firstnumber) && (!req.body.lastname)) return res.status(401).json({message: 'falta de parametros'});

            return TotalVoiceService.criarConferencia(req.body.firstnumber, req.body.lastnumber, token)
                .then((res) => {
                    return res.status(200).json({'message': 'Criando ligação'})
                }).catch(() => {
                    return res.status(500);
                })
        }catch {
            return res.status(500);
        }
    }
}