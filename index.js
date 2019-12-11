const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./src/routes/routes')
app.use('/api', routes);
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