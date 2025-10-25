import { cambiarEstadoMesaService } from "../services/patchServices.js";

const cambiarEstadoMesa = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await cambiarEstadoMesaService(req.query);

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
    console.error("Error en cambiarEstadoMesa:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};


export { cambiarEstadoMesa };
