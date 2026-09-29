import { Animal } from "./Animal.js";

export class Cliente {
    #nome;
    #telefone;
    #animais;

    constructor(nome, telefone) {
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
    }

    getAnimais() {
        return this.#animais;
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("O objeto informado não é um Animal.");
        }

        if (!this.#animais.includes(animal)) {
            this.#animais.push(animal);
        }

        if (animal.getCliente() !== this) {
            animal.setCliente(this);
        }
    }

    listarAnimais() {
        console.log(`Cliente: ${this.#nome}`);
        console.log("\nAnimais:");

        this.#animais.forEach(animal => {
            console.log(`• ${animal.getNome()}`);
        });
    }
}
