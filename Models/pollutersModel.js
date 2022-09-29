"use strict";

const { builtinModules } = require("module");

function loadCountryData () {
    // Data sourced from 
    // https://climatetrade.com/which-countries-are-the-worlds-biggest-carbon-polluters/
    const entry1 = {"position": 1, "name": "China", "emissions": 10065000, "emitType": "CO2"};
    const entry2 = {"position": 2, "name": "United States", "emissions": 5416000, "emitType": "CO2"};
    const entry3 = {"position": 3, "name": "India", "emissions": 2654000, "emitType": "CO2"};
    const entry4 = {"position": 4, "name": "Russia", "emissions": 1711000, "emitType": "CO2"};
    const entry5 = {"position": 5, "name": "Japan", "emissions": 1162000, "emitType": "CO2"};
    const entry6 = {"position": 6, "name": "Germany", "emissions": 759000, "emitType": "CO2"};
    const entry7 = {"position": 7, "name": "Iran", "emissions": 720000, "emitType": "CO2"};
    const entry8 = {"position": 8, "name": "South Korea", "emissions": 659000, "emitType": "CO2"};
    const entry9 = {"position": 9, "name": "Saudi Arabia", "emissions": 621000, "emitType": "CO2"};
    const entry10 = {"position": 10, "name": "Indonesia", "emissions": 615000, "emitType": "CO2"};

    const countryData = [entry1, entry2, entry3, entry4, entry5,
        entry6, entry7, entry8, entry9, entry10]

    return countryData;
}

function loadCorporationData () {
    // Data sourced from 
    // https://peri.umass.edu/greenhouse-100-polluters-index-current
    const entry1 = {"position": 1, "name": "Vista Energy", "emissions": 106510086, "emitType": "CO2"};
    const entry2 = {"position": 2, "name": "Duke Energy", "emissions": 87140105, "emitType": "CO2"};
    const entry3 = {"position": 3, "name": "Southern Company", "emissions": 86244286, "emitType": "CO2"};
    const entry4 = {"position": 4, "name": "Berkshire Hathaway", "emissions": 74960726, "emitType": "CO2"};
    const entry5 = {"position": 5, "name": "American Electric Power", "emissions": 70044545, "emitType": "CO2"};
    const entry6 = {"position": 6, "name": "U.S. Government", "emissions": 47504228, "emitType": "CO2"};
    const entry7 = {"position": 7, "name": "Xcel Energy", "emissions": 46975696, "emitType": "CO2"};
    const entry8 = {"position": 8, "name": "Energy Capital Partners", "emissions": 41420489, "emitType": "CO2"};
    const entry9 = {"position": 9, "name": "NextEra Energy", "emissions": 40521250, "emitType": "CO2"};
    const entry10 = {"position": 10, "name": "Exxon Mobil", "emissions": 38252969, "emitType": "CO2"};

    const corporationData = [entry1, entry2, entry3, entry4, entry5,
        entry6, entry7, entry8, entry9, entry10]

    return corporationData;
}

function loadIndividualData () {
    // How Much Billionaires Pollute
    // https://www.theguardian.com/environment/2020/sep/21/worlds-richest-1-cause-double-co2-emissions-of-poorest-50-says-oxfam
    // Data sourced from 
    // https://www.deccanherald.com/dh-galleries/photos/the-prosperous-polluters-20-billionaires-with-high-carbon-footprint-954406#21
    // 2018
    const entry1 = {"position": 1, "name": "Roman Abramovich", "emissions": 28303.257, "emitType": "CO2"};
    const entry2 = {"position": 2, "name": "David Geffen", "emissions": 16674.056, "emitType": "CO2"};
    const entry3 = {"position": 3, "name": "Sheldon Adelson", "emissions": 10820.9, "emitType": "CO2"};
    const entry4 = {"position": 4, "name": "Bernard Arnault", "emissions": 9453.7722, "emitType": "CO2"};
    const entry5 = {"position": 5, "name": "Ann Walton Kroenke", "emissions": 9110.8563, "emitType": "CO2"};
    const entry6 = {"position": 6, "name": "Ernesto Bertarelli", "emissions": 9084.548, "emitType": "CO2"};
    const entry7 = {"position": 7, "name": "Larry Ellison", "emissions": 8315.255, "emitType": "CO2"};
    const entry8 = {"position": 8, "name": "Ronald Perelman", "emissions": 6843.802, "emitType": "CO2"};
    const entry9 = {"position": 9, "name": "Laurene Powell Jobs", "emissions": 6811.143, "emitType": "CO2"};
    const entry10 = {"position": 10, "name": "Bill Gates", "emissions": 6720.425, "emitType": "CO2"};
    const entry11 = {"position": 18, "name": "Jeff Bezos", "emissions": 2017.579, "emitType": "CO2"};
    const entry12 = {"position": 19, "name": "Elon Musk", "emissions": 1890.573, "emitType": "CO2"};
    const entry13 = {"position": 20, "name": "Michael Bloomberg", "emissions": 1616, "emitType": "CO2"};

    const individualData = [entry1, entry2, entry3, entry4, entry5,
        entry6, entry7, entry8, entry9, entry10, entry11, entry12, entry13]

    return individualData;
}

module.exports = {
    loadCountryData,
    loadCorporationData,
    loadIndividualData
}