"use strict";

const emissionsModel = require("../Models/emissionsModel");

function renderEmissions(req, res){
    // Store emission type and emissions
    const emitType = req.query.type;
    const emissions = req.query.emission;

    // Calculate the data and store it
    const data = emissionsModel.calculations(emitType, emissions);

    // Render ejs page
    res.render("emissions", {"data": data});
}

module.exports = {
    renderEmissions
}