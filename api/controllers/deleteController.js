import { deleteMesaService, deletePedidoService } from "../services/deleteServices.js";

const deleteMesa = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await deleteMesaService(req.query);

    if (responseMod?.type !== "success" || responseMod?.error) {
      statusCode = 400;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      console.log(responseMod);

      res.send(responseMod);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.send(responseMod);
    }
  } catch (error) {
    console.error("Error en deleteMesa:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};

const deletePedido = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await deletePedidoService(req.query);

    if (responseMod?.type !== "success" || responseMod?.error) {
      statusCode = 400;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      console.log(responseMod);

      res.send(responseMod);
    } else {
      statusCode = 200;
      console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
      res.send(responseMod);
    }
  } catch (error) {
    console.error("Error en deletePedido:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};

export { deleteMesa, deletePedido };
