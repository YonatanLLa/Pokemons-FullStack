const validate = (req, res, next) => {
  const { name, hp, attack, defense,speed, height, weight } = req.body;
  if (!name) res.status(400).json({ error: "Missing name" });
  if (!hp) res.status(400).json({ error: "Missing hp" });
  if (!attack) res.status(400).json({ error: "Missing attack" });
  if (!defense) res.status(400).json({ error: "Missing defense" });
  if (!speed) res.status(400).json({ error: "Missing speed" });
  if (!height) res.status(400).json({ error: "Missing height" });
  if (!weight) res.status(400).json({ error: "Missing weight" });
  // if (!type) res.status(400).json({ error: "Missing types" });

  next();
};

module.exports = { validate };
