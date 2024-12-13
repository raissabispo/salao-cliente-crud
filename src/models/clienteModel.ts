import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("clientes")
export class Cliente {
    @PrimaryColumn({ type: "varchar", length: 14, unique: true, nullable: false })
    cpf!: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    nome!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    nomeSocial: string | null = null;

    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    email!: string;

    constructor(cpf: string, nome: string, email: string, nomeSocial?: string | null) {
        this.cpf = cpf;
        this.nome = nome;
        this.nomeSocial = nomeSocial ?? null;  
        this.email = email;
    }
}
