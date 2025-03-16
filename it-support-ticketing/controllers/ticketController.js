const db = require("../config/db");

exports.createTicket = (req, res) => {
  const { title, description } = req.body;
  db.query("INSERT INTO tickets (user_id, title, description) VALUES (?, ?, ?)",
    [req.user.userId, title, description],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Ticket created successfully" });
    });
};

exports.getTickets = (req, res) => {
  db.query("SELECT * FROM tickets WHERE user_id = ?", [req.user.userId], (err, tickets) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tickets);
  });
};
