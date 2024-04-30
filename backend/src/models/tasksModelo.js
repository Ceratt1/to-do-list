const { json } = require('express');
const connection = require('./connection')

const getAll =  async () => {

    try {
        const [tasks] = await connection.execute('select * from todolist.tasks;');
        if (tasks) {
            return tasks;
        } else {
            return { mensagem: 'dados não encontrados' };
        }
    } catch (error) {
        console.error(error);
        return { mensagem: 'ocorreu um erro ao buscar os dados' };
    }
};


const getOne = async (id) =>{

    const operacao = connection.execute(
        'SELECT * FROM todolist.tasks WHERE id_task = ?',
        [id]
    )
    return operacao

}







const createTask = async (task) => {

    try{

    const {mensagem,status} = task
    const date = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    const createdTask = await connection.execute('INSERT INTO todolist.tasks (task_name, status_tasks, date_task) VALUES(?,?,?);',
    [mensagem, status, date]
    )
    return 0
    }catch(erro){

    console.log(erro);
    return 1

    }
}


const atttaskstatus = async (status, id) => {

    const attstatustask = await connection.execute
    (
        "UPDATE todolist.tasks SET status_tasks = ? WHERE id_task = ?;",
        [status, id]
    )
    return attstatustask


}

const deletetask = async (id) => {

    const deletetask = await connection.execute(
        'DELETE FROM todolist.tasks WHERE id_task = ?;',
        [id]
    )


}




module.exports = {
    getAll,
    getOne,
    createTask,
    atttaskstatus,
    deletetask
};