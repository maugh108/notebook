// Middleware personalizado que cierra la sesión del tipo y la ruta de cada solicitud en el servidor
const clog = (req, res, next) => {
   switch (req.method) {
    case 'GET': {
      console.info(`${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
