"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../useCases/publishContract/index");
const index_2 = require("../useCases/findContracts/index");
const index_3 = require("../useCases/deleteContracts/index");
const index_4 = require("../useCases/closeContracts/index");
const router = (0, express_1.Router)();
// publish contract
router.post('/', (req, res) => {
    return index_1.publishContractController.handle(req, res);
});
// get all contracts
router.get('/all', (req, res) => {
    return index_2.findContractController.findAll(req, res);
});
// find by id
router.get('/:id', (req, res) => {
    return index_2.findContractController.findById(req, res);
});
// close contract
router.put('/:contractId', (req, res) => {
    return index_4.closeContractController.handle(req, res);
});
// delete all
router.delete('/all', (req, res) => {
    return index_3.deleteContractController.deleteAll(req, res);
});
//delete by id
router.delete('/:id', (req, res) => {
    return index_3.deleteContractController.deleteById(req, res);
});
exports.default = router;
