"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../useCases/createPilot/index");
const index_2 = require("../useCases/findPilots/index");
const index_3 = require("../useCases/deletePilots/index");
const router = (0, express_1.Router)();
// create pilot
router.post('/', (req, res, next) => {
    return index_1.createPilotController.handle(req, res, next);
});
// get all pilots
router.get('/all', (req, res, next) => {
    return index_2.findPilotController.findAll(req, res, next);
});
// find one
router.get('/:pc', (req, res, next) => {
    return index_2.findPilotController.findOne(req, res, next);
});
// delete pilot by pc
router.delete('/delete/:pc', (req, res, next) => {
    return index_3.deletePilotsController.deleteByPC(req, res, next);
});
router.delete('/delete', (req, res, next) => {
    return index_3.deletePilotsController.deleteAll(req, res, next);
});
exports.default = router;
