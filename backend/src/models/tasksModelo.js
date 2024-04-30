const { json } = require('express');
const connection = require('./connection')

const getAll =  async () => {

    const tasks = await connection.execute('SELECT * from tasks;');
    
    return tasks;

};


module.exports = {
    getAll
};