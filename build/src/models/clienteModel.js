"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
let Cliente = class Cliente {
    constructor(cpf, nome, email, nomeSocial) {
        this.nomeSocial = null;
        this.cpf = cpf;
        this.nome = nome;
        this.nomeSocial = nomeSocial !== null && nomeSocial !== void 0 ? nomeSocial : null;
        this.email = email;
    }
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "varchar", length: 14, unique: true, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "nomeSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)("clientes"),
    __metadata("design:paramtypes", [String, String, String, Object])
], Cliente);
