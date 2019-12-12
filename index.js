const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./src/routes/routes')
app.use('/api', routes);
app.listen(process.env.PORT || 5005, () => {
    console.log('back online again')
});