import models from "../models/index.js";

const readAllMenusService = async () => {
  try {
    
    const doc = await models.Producto.find({});

    if (!doc) {
      throw new Error("Documentos no encontrado");
    }    

    return {
      type: "success",
      message: "Informacion encontrada",
      data: doc,
    };
  } catch (error) {
    return { type: "failure", message: `Error en proceso de identificacion: ${error.message}` };
  }
};

const readMesaService = async (query) => {
  try {
    const mesa = query.mesaId;
    
    let result;

    if (models[mesa]) {
      result = await models[mesa].find({});
    } else {
      return {
        type: "failure",
        message: `Modelo ${mesa} no encontrado`,
      };
    }

    if (result.length == 0){
      return {
      type: "failure",
      message: "No hay datos en la coleccion"
    };
    }

    return {
      type: "success",
      message: "Informacion encontrada",
      data: result,
    };
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de busqueda: ${error.message}`,
    };
  }
};

export { readAllMenusService, readMesaService };