const express = require("express");
const { createTicket, getTickets } = require("../controllers/ticketController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createTicket);
router.get("/", authMiddleware, getTickets);

module.exports = router;
