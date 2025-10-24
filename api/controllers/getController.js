import { readAllMenusService, readMesaService } from "../services/getServices.js";

const readAllMenus = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await readAllMenusService();

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
    console.error("Error en readAllMenus:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};

const readMesa = async (req, res) => {
  try {
    let statusCode;
    const responseMod = await readMesaService(req.query);

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
    console.error("Error en readMesa:", error);
    let statusCode = 500;
    console.log(`Status: ${statusCode}, Route: ${req.originalUrl}`);
  }
};

export { readAllMenus, readMesa };
