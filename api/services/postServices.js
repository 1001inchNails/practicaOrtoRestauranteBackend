import models from "../models/index.js";

const createObjetoMenuService = async (data) => {
  try {
    if (!data) {
      return { message: "Error: No existen datos" };
    }

    let { nombre, precio, descripcion } = data;

    precio = Number(precio);

    if (!models || !models.Producto) {
      return { message: "Error: fallo de modelos" };
    }

    let highestIndiceDoc = await models.Producto.findOne()
      .sort({ id: -1 })
      .exec();

    let highestIndice = highestIndiceDoc ? highestIndiceDoc.id : 0;

    if (highestIndice == null) {
      return { message: "Error: fallo de busqueda de indice" };
    }

    let nuevoIndice;

    if (highestIndice == 0) {
      nuevoIndice = 1;
    } else {
      nuevoIndice = highestIndice + 1;
    }

    const nuevoDoc = new models.Producto({
      id: nuevoIndice,
      nombre,
      precio,
      descripcion,
    });

    const savedModule = await nuevoDoc.save();

    //console.log(savedModule);

    if (savedModule) {
      return {
        type: "success",
        message: "Documento creado exitosamente",
      };
    } else {
      return {
        type: "failure",
        message: "Documento no creado exitosamente",
      };
    }
  } catch (error) {
    return {
      type: "failure",
      message: `Error en proceso de identificacion: ${error.message}`,
    };
  }
};

const mandarPedidoDeMesaService = async (data) => {
  try {
    if (!Array.isArray(data.pedidos)) {
      return {
        type: "failure",
        message: "Error: El pedidos deben ser un array de productos",
      };
    }

    if (!data.mesa) {
      return {
        type: "failure",
        message: "Error: Faltan datos de mesa",
      };
    }

    let datos = data.pedidos;
    let mesa = data.mesa;

    const productosValidos = datos.every((producto) => {
      return (
        producto.id !== undefined &&
        producto.nombre !== undefined &&
        producto.descripcion !== undefined &&
        !isNaN(producto.precio) &&
        !isNaN(producto.cantidad)
      );
    });

    if (!productosValidos) {
      return {
        type: "failure",
        message: "Error: Algunos productos tienen datos invalidos",
      };
    }

    const productosGuardados = [];

    for (const productoData of datos) {
      const nuevoProducto = {
        id: Number(productoData.id),
        nombre: productoData.nombre,
        precio: Number(productoData.precio),
        cantidad: Number(productoData.cantidad),
        descripcion: productoData.descripcion,
      };

      const doc = await models.Producto.findOne({
        $and: [{ id: productoData.id }, { nombre: productoData.nombre }],
      });

      if (!doc) {
        return {
          type: "failure",
          message: "Error: Algunos productos no existen en BBDD",
        };
      } else {
        productosGuardados.push(nuevoProducto);
      }
    }

    let nuevoMesa;

    if (models[mesa]) {
      nuevoMesa = new models[mesa]({
        pedidos: productosGuardados,
        haSidoServido: false
      });
    } else {
      return {
        type: "failure",
        message: `Modelo ${mesa} no encontrado`,
      };
    }

    const mesaGuardada = await nuevoMesa.save();

    if (mesaGuardada) {
      return {
        type: "success",
        message: "Pedidos creados exitosamente",
        data: mesaGuardada,
      };
    } else {
      return {
        type: "failure",
        message: "No se pudieron crear los pedidos",
      };
    }
  } catch (error) {
    return {
      type: "failure",
      message: `Error en el proceso: ${error.message}`,
    };
  }
};

export { createObjetoMenuService, mandarPedidoDeMesaService };
