import Log from '../models/Logs.js'

export const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find()
    res.json(logs)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong.'
    })
  }
};

export const creatLog = async (req, res) => {
  try {
    const date = new Date(req.body.date);
    // Validar que fecha sea valida
    if (isNaN(date.getTime())) {
      return res.status(400).json({ error: 'Parámetro date inválidos.' });
    }

    // Validar que description sea valida
    if (!req.body.description) {
      return res.status(400).json({ error: 'Parámetro description es requerido.' });
    }

    const newLog = new Log({
      "date": date,
      "description": req.body.description,
      "type": req.body.type ?? 'api'
    })
    const savedLog = await newLog.save()
    res.json(savedLog)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong.'
    })
  }
};

export const getLogById = async (req, res) => {
  try {
    const logs = await Log.findById(req.params.id)
    res.json(logs)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong.'
    })
  }
};

export const deleteLogById = async (req, res) => {
  try {
    const logs = await Log.findByIdAndDelete(req.params.id)
    res.json({
      message: `El log con id: ${req.params.id} ha sido eliminado.`
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong.'
    })
  }
};

export const getLogsByType = async (req, res) => {

  // validar si el parametro type tiene el tipo correcto
  if (req.query.type != 'api' && req.query.type != 'form') {
    return res.status(400).json({ error: 'El parametro type debe tener valor api o form' });
  }

  const logs = await Log.find({ type: req.query.type })
  res.json(logs)
};

export const getLogsByDate = async (req, res) => {

  const { startDate, endDate } = req.query;

  // Validar que parametros existan
  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Faltan parámetros de fecha' });
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validar que fechas sean validas
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({ error: 'Parámetros de fecha inválidos' });
  }
  const logs = await Log.find({
    date: {
      $gte: start,
      $lte: end
    }
  })
  res.json(logs)
};