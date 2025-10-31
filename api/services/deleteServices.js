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

// borrar pedido de coleccion correspondiente "mesa" con mongoId concreta
const deletePedidoService = async (query) => {
  try {
    const idDocu = query.idDocu;
    const mesa = query.mesaId;
    
    let result;

    if (models[mesa]) {
      result = await models[mesa].findOneAndDelete({ _id: idDocu });
    } else {
      return {
        type: "failure",
        message: `Modelo ${mesa} no encontrado`,
      };
    }

    if (!result) {
      return {
        type: "failure",
        message: `Pedido con id ${idDocu} no encontrado`,
      };
    }

    return {
      type: "success",
      message: "Pedido eliminado correctamente"
    };
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de eliminación: ${error.message}`,
    };
  }
};

export { deleteMesaService, deletePedidoService };
