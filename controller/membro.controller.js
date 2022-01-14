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



