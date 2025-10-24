import { createObjetoMenuService, mandarPedidoAMesaService } from "../services/postServices.js";

const createObjetoMenu = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await createObjetoMenuService(req.body);

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
    console.error("Error en createObjetoMenu:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};

const mandarPedidoAMesa = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await mandarPedidoAMesaService(req.body);

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
    console.error("Error en mandarPedidoAMesa1:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};


export { createObjetoMenu, mandarPedidoAMesa };
