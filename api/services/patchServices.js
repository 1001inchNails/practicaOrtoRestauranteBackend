import models from "../models/index.js";

const cambiarEstadoMesaService = async (query) => {
  try {
    const mesa = query.mesaId;
    const nuevoOcupada = query.ocupada;
    
    let result;

    if (models.ListaMesa) {
      result = await models.ListaMesa.findOneAndUpdate(
        { idMesa: mesa },
        { $set: { ocupada: nuevoOcupada } },
        { new: true }
      );
    } else {
      return {
        type: "failure",
        message: `Modelo ListaMesa no encontrado`,
      };
    }

    if (!result) {
      return {
        type: "failure",
        message: `Mesa con id ${mesa} no encontrada`,
      };
    }

    return {
      type: "success",
      message: "Informacion actualizada"
    };
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de actualizacion: ${error.message}`,
    };
  }
};

export { cambiarEstadoMesaService };