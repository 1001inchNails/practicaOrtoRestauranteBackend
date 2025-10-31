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

// cambiar estado de haSidoServido de un pedido en concreto
const cambiarEstadoPedidoService = async (query) => {
  try {
    const mesa = query.mesaId;
    const idDocu = query.iddocu;
    const nuevoEstado = query.hasidoservido;

    let result;
    
    if (models[mesa]) {
      result = await models[mesa].findOneAndUpdate(
        { _id: idDocu },
        { $set: { haSidoServido: nuevoEstado } },
        { new: true }
      );
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
      message: "Estado del pedido actualizado correctamente",
    };
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de actualización: ${error.message}`,
    };
  }
};

export { cambiarEstadoMesaService, cambiarEstadoPedidoService };