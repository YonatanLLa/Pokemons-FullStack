const validate = (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight } = req.body;

  const requiredFields = ['name', 'hp', 'attack', 'defense', 'speed', 'height', 'weight'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing ${field}` });
    }
  }

  next();
};

module.exports = { validate };


