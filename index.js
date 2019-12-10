const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.Router())

const GuestController = require('./src/controllers/GuestController');
app.use('/api/code/:id', GuestController.index);
app.use('/api/guest', GuestController.call);

app.listen(process.env.PORT || 3000, () => {
    console.log('back online again')
});




/*
* Bloco de Testes de banco de dados 
*
*/


 /*
const ds = require('./src/services/DatabaseService');
ds.find('adkmmNt').then(res => {
    console.log(res)
}).catch(e => console.log(e))
*/