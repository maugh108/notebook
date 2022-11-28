// Middleware personalizado que cierra la sesión del tipo y la ruta de cada solicitud en el servidor
const clog = (req, res, next) => {
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      console.info(`ðŸ“— ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`ðŸ“˜ ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`ðŸ“™${fgCyan}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
