"use strict";

const pollutersModel = require("../Models/pollutersModel");

function renderPolluters(req, res) {
    const countryData = pollutersModel.loadCountryData();
    const corporationData = pollutersModel.loadCorporationData();
    const individualData = pollutersModel.loadIndividualData();

    res.render("polluters", 
        {"countryData": countryData,
        "corporationData": corporationData,
        "individualData": individualData});
}

module.exports = {
    renderPolluters
}