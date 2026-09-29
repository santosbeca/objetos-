import { Cliente } from "./Cliente.js";
import { Prontuario } from "./Prontuario.js";
import { Veterinario } from "./Veterinario.js";

export class Animal {
    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie) {
        this.#nome = nome;
        this.#especie = especie;
        this.#cliente = null;
        this.#prontuario = null;
        this.#veterinarios = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

    getCliente() {
        return this.#cliente;
    }

    setCliente(cliente) {
        if (!(cliente instanceof Cliente)) {
            throw new Error("O objeto informado não é um Cliente.");
        }

        this.#cliente = cliente;

        if (!cliente.getAnimais().includes(this)) {
            cliente.addAnimal(this);
        }
    }

    getProntuario() {
        return this.#prontuario;
    }

    setProntuario(prontuario) {
        if (!(prontuario instanceof Prontuario)) {
            throw new Error("O objeto informado não é um Prontuario.");
        }

        this.#prontuario = prontuario;

        if (prontuario.getAnimal() !== this) {
            prontuario.setAnimal(this);
        }
    }

    getVeterinarios() {
        return this.#veterinarios;
    }

    addVeterinario(veterinario) {
        if (!(veterinario instanceof Veterinario)) {
            throw new Error("O objeto informado não é um Veterinario.");
        }

        if (!this.#veterinarios.includes(veterinario)) {
            this.#veterinarios.push(veterinario);
        }

        if (!veterinario.getAnimais().includes(this)) {
            veterinario.addAnimal(this);
        }
    }

    listarVeterinarios() {
        console.log(`\nVeterinários de ${this.#nome}:`);

        this.#veterinarios.forEach(veterinario => {
            console.log(`• ${veterinario.getNome()} - CRMV: ${veterinario.getCrmv()}`);
        });
    }
}
