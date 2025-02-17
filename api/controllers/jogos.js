import { db } from "../db.js";

export const getJogos = (_, res) => {
  const q = "SELECT * FROM jogos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addJogo = (req, res) => {
  const q =
    "INSERT INTO jogos(`adversario`, `local`, `data`, `resultado`) VALUES(?)";

  const values = [
    req.body.adversario,
    req.body.local,
    req.body.data,
    req.body.resultado,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogo adicionado com sucesso.");
  });
};

export const updateJogo = (req, res) => {
  const q =
    "UPDATE jogos SET `adversario` = ?, `local` = ?, `data` = ?, `resultado` = ? WHERE `id` = ?";

  const values = [
    req.body.adversario,
    req.body.local,
    req.body.data,
    req.body.resultado,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogo atualizado com sucesso.");
  });
};

export const deleteJogo = (req, res) => {
  const q = "DELETE FROM jogos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Jogo deletado com sucesso.");
  });
};
