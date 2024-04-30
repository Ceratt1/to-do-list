const getAll = (req, res) =>{

    return res.status(200).json({'msensagem' : 'Tudo certo no controle'})
}


module.exports = {
    getAll
}