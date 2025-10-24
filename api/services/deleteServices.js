import models from "../models/index.js";

const deleteMesaService = async (query) => {
  try {
    const mesa = query.mesaId;
    
    let result;

    if (models[mesa]) {
      result = await models[mesa].deleteMany({});
    } else {
      return {
        type: "failure",
        message: `Modelo ${mesa} no encontrado`,
      };
    }

    return {
      type: "success",
      message: "Informacion borrada"
    };
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de borrado: ${error.message}`,
    };
  }
};

export { deleteMesaService };
