exports.getAll = async (model) => {
    return await model.findAll();
};

exports.getById = async (model, id) => {
    return await model.findByPk(id);
}

exports.createRegisterAsync = async (model, object) => {
    await model.create(object);
};