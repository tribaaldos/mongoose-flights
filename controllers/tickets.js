const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

async function create(req, res) {
    try{
        req.body.flight = req.params.id
        await Ticket.create(req.body)
        console.log(req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}

async function newTicket(req, res) {
    let flightId = req.params.id;
    res.render('tickets/new', {flightId})
}