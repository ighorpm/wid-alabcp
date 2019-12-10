const DatabaseService = require('../services/DatabaseService');
const TotalVoiceService = require('../services/TotalVoiceService')
const config = require('../config.json');
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
        const token = config.token;
        return TotalVoiceService.criarConferencia(req.body.firstnumber, req.body.lastname, token)
                .then((res) => {
                    return res.status(200).json({'message': 'Criando ligação',})
                }).catch(() => {
                    return res.status(500);
                })
    }
}