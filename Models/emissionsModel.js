"use strict";

/* ========================================================================== */
/* ----------------------------- Vehicles ----------------------------------- */
/* ========================================================================== */

function calculateCars(emissions) {
    // Source for Cars Emissions
    // https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle
    // 4.6 = metric tons per year by car
    const numOfCars = emissions / 4.6;

    return numOfCars.toFixed(5);
}

function calculatePlanes(emissions) {
    // Source for Planes Emissions
    // https://www.carbonindependent.org/22.html
    // https://www.flexport.com/blog/decommissioned-planes-salvage-value/
    // .25 = 1 hours of flying
    // .25 * 5500 (year average of plane hours flown)
    const numOfPlanes = emissions / 1375;

    return numOfPlanes.toFixed(5);
}

// Source for all ships
// https://www.statista.com/statistics/216048/worldwide-co2-emissions-by-ship-type/

function calculateCruiseShips(emissions) {
    // Average cruise liner = 20,000,000 metric tonnes of CO2
    // # of cruise ships active
    // https://www.gaytravel.com/gay-blog/cruise-statistics-2021
    // 20,000,000 / 314
    const numOfCruise = emissions / 63694.2675;
    
    return numOfCruise.toFixed(5);
}

function calculateContainerShips(emissions) {
    // Average cruise liner = 140,000,000 metric tonnes of CO2
    // # of container ships active
    // https://www.statista.com/statistics/198227/forecast-for-global-number-of-containerships-from-2011/
    // 140,000,000 / 5,434
    const numOfContiner = emissions / 25763.71;
    
    return numOfContiner.toFixed(5);
}

function calculateOilTankers(emissions) {
    // Average oil tanker = 210,000,000 metric tonners of CO2
    // # of oil tankers active
    // https://www.statista.com/statistics/468405/global-oil-tanker-fleet-by-type/
    // 210,000,000 / 2,210
    const numOfOil = emissions / 95022.6244;
    
    return numOfOil.toFixed(5);
}

function calculateBulkCarrierShips(emissions) {
    // Average bulk carrier ship = 440,000,000 metric tonnes of CO2
    // # of carriers active
    // https://en.wikipedia.org/wiki/Bulk_carrier
    // 440,000,000 / 12,700
    const numOfCarrier = emissions / 34645.6693;
    
    return numOfCarrier.toFixed(5);
}

function calculateHouses(emissions) {
    // Source for average house usage
    // https://www.ccfpd.org/Portals/0/Assets/PDF/Facts_Chart.pdf
    const houses = emissions / 7.5;
    
    return houses.toFixed(5);
}

function calculateGallonsOfGas(emissions) {
    // Source for gallon of gas
    // https://climatekids.nasa.gov/review/carbon/gasoline.html
    // 1 gallon of gas = 20 pounds of CO2 emissions
    // 1 metric ton = 2204.62 pounds
    const gallons = (emissions * 2204.62) / 20;
    
    return gallons.toFixed(5);
}

function calculateBarrelsOfOil(emissions) {
    // Source for crude oil
    // http://numero57.net/2008/03/20/carbon-dioxide-emissions-per-barrel-of-crude/
    // 1 barrel of oil = .371 metric tonnes of CO2 
    const barrels = emissions / .371;
    
    return barrels.toFixed(5);
}

/* ========================================================================== */
/* ---------------------------- Alternatives -------------------------------- */
/* ========================================================================== */

function distance(emissions) {
    // Distance in a car - average is 11,500 miles a year
    // 11,500 miles = 4.6 metric tonnes CO2
    // miles = 11,500 / 4.6
    const miles = 11500 / 4.6;
    const distance = emissions * miles;

    return distance.toFixed(5);
}

function travelWorld(emissions) {
    // Source for around the world
    // https://www.space.com/17638-how-big-is-earth.html
    const distance = distance(emissions);
    const trips = distance / 24860;

    return trips.toFixed(5);
}

/* ========================================================================== */
/* ----------------------------- Pollution ---------------------------------- */
/* ========================================================================== */

function findElectricity(emissions) {
    const electricity = emissions * .00038555;
    // 1 kWh = .00038555 metric tonnes CO2
    return electricity.toFixed(5);
}

function findTonnes(emissions) {
    const tonnes = emissions / 2593.67059;
    // 2593.67059 kWh = 1 metric ton of CO2
    return tonnes.toFixed(5);
}

/* ========================================================================== */
/* ----------------------------- Emissions ---------------------------------- */
/* ========================================================================== */

function calculations(type, emissions) {
    if (type != "CO2"){
        const electricity = emissions;
        const tonnes = findTonnes(emissions);

        const cars = calculateCars(tonnes);
        const planes = calculatePlanes(tonnes);
        const cruiseShips = calculateCruiseShips(tonnes);
        const containerShips = calculateContainerShips(tonnes);
        const oilTankers = calculateOilTankers(tonnes);
        const bulkCarriers = calculateBulkCarrierShips(tonnes);
        const houses = calculateHouses(tonnes);
        const gallonsOfGas = calculateGallonsOfGas(tonnes);
        const barrelsOfOil = calculateBarrelsOfOil(tonnes);

        const data = {
            "electricity": electricity,
            "tonnes": tonnes,
            "cars": cars,
            "planes": planes,
            "cruiseShips": cruiseShips,
            "containerShips": containerShips,
            "oilTankers": oilTankers,
            "bulkCarriers": bulkCarriers,
            "houses": houses,
            "gallonsOfGas": gallonsOfGas,
            "barrelsOfOil": barrelsOfOil
        }
        console.log(data);

        return data;
    } else {
        const electricity = findElectricity(emissions);
        const tonnes = emissions

        const cars = calculateCars(tonnes);
        const planes = calculatePlanes(tonnes);
        const cruiseShips = calculateCruiseShips(tonnes);
        const containerShips = calculateContainerShips(tonnes);
        const oilTankers = calculateOilTankers(tonnes);
        const bulkCarriers = calculateBulkCarrierShips(tonnes);
        const houses = calculateHouses(tonnes);
        const gallonsOfGas = calculateGallonsOfGas(tonnes);
        const barrelsOfOil = calculateBarrelsOfOil(tonnes);

        const data = {
            "electricity": electricity,
            "tonnes": tonnes,
            "cars": cars,
            "planes": planes,
            "cruiseShips": cruiseShips,
            "containerShips": containerShips,
            "oilTankers": oilTankers,
            "bulkCarriers": bulkCarriers,
            "houses": houses,
            "gallonsOfGas": gallonsOfGas,
            "barrelsOfOil": barrelsOfOil
        }

        return data;

        // Need to build controller now, also need to make webpage with form
    }
}

module.exports = {
    calculations
}