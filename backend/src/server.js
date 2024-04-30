require('dotenv').config();
const app = require('./app')
const port = 3030



app.listen(port, () => console.log('Server rodando na port ' + port));

