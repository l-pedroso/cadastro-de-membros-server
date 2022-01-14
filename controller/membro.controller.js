const Membro = require('../model/membro.model');

exports.add = async (req, res, next) => {
    const membro = new Membro(req.body);
    try {
        await membro.save();
        res.send('user add with success ');
    } catch (e) {
        next(e);
    }
}

exports.listUsersByCongregacao = async (req, res, next) => {
    try {
        const membro = await Membro.find({ congregacao: req.params.congregacao }).select({ name: 1, _id: 0 });
        if (membro == 0) {
            throw new Error("Congregação não encontrada");
        }
        res.json(membro);
    } catch (e) {
        next(e);
    }
}

exports.update = async (req, res, next) => {
    try {
        const membro = await Membro.updateOne({ cpf: req.params.cpf },req.body );
        if (membro == 0) {
            throw new Error("Membro Não Encontrado");
        }
        res.send("Membro atualizado com sucesso");

    } catch (e) {
        next(e);
    }
}



