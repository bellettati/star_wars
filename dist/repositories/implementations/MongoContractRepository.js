"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoContractRepository = void 0;
const ContractModel_1 = require("./models/ContractModel");
class MongoContractRepository {
    async findAll() {
        try {
            const contracts = await ContractModel_1.contractModel.find({});
            return contracts;
        }
        catch (e) {
            throw new Error('unable to get contracts');
        }
    }
    async findById(id) {
        try {
            const contract = await ContractModel_1.contractModel.findOne({ id });
            if (!contract)
                throw new Error('contract not found');
            return contract;
        }
        catch (e) {
            throw new Error(e.message || 'unable to find contract');
        }
    }
    async findClosedContracts() {
        try {
            const contracts = await ContractModel_1.contractModel.find({ isOpen: false });
            return contracts;
        }
        catch (e) {
            throw new Error('unable to find closed contracts');
        }
    }
    async findOpenContracts() {
        try {
            const contracts = await ContractModel_1.contractModel.find({ isOpen: true });
            return contracts;
        }
        catch (e) {
            throw new Error('unable to find open contracts');
        }
    }
    async publishContract(contract) {
        try {
            await ContractModel_1.contractModel.create(contract);
        }
        catch (e) {
            throw new Error(e.message || 'unable to publish contract');
        }
    }
    async deleteById(id) {
        try {
            const contract = await this.findById(id);
            await ContractModel_1.contractModel.deleteOne({ id: contract.id });
        }
        catch (e) {
            throw new Error(e.message || 'unable to delete pilots');
        }
    }
    async deleteAll() {
        try {
            await ContractModel_1.contractModel.deleteMany({});
        }
        catch (e) {
            throw new Error(e.message || 'unable to delete contracts');
        }
    }
    async closeContract(id) {
        try {
            const contract = await this.findById(id);
            await ContractModel_1.contractModel.updateOne({ id: contract.id }, { $set: { isOpen: false } });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.MongoContractRepository = MongoContractRepository;
