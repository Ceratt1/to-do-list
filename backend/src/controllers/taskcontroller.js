const { json } = require('express');
const tasksModel = require('../models/tasksModelo')
const express = require('express')

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks)
}


const getOne = async (req,res) => {

    let index = parseInt(req.params.idTask) -1
    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks[index])

}

const createTaskController = async (req,res) =>{

    if (req.body.mensagem && req.body.status) {
        if (req.body.mensagem != '' && req.body.status != '') {
        
            await tasksModel.createTask(req.body)
            return res.status(200).json({msg : 'Enviado a DB'})
        }
    }else {
        return res.status(404).json({'mensagem' : 'Não enviamos nada'})
    }

}



const atttaskstatus = async (req,res) => {

    const status = req.body.status
    let id = req.params.idTask


    const operacaodb = await tasksModel.atttaskstatus(status, id)
    console.log(status,'  |  ', id);
    return res.status(200).json({msg : 'sucesso na operacao'})

}





module.exports = {
    getAll,
    getOne,
    createTaskController,
    atttaskstatus
}