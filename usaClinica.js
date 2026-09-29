import { Cliente } from "./Cliente.js";
import { Animal } from "./Animal.js";
import { Prontuario } from "./Prontuario.js";
import { Veterinario } from "./Veterinario.js";

const cliente = new Cliente("João Silva", "(61) 99999-9999");

const animal1 = new Animal("Rex", "Cachorro");
const animal2 = new Animal("Luna", "Gato");

const prontuario1 = new Prontuario(
    "P001",
    "Animal saudável. Vacinação em dia."
);

const prontuario2 = new Prontuario(
    "P002",
    "Animal com histórico de alergia."
);

const veterinario1 = new Veterinario(
    "Dra. Ana Souza",
    "CRMV-12345"
);

const veterinario2 = new Veterinario(
    "Dr. Carlos Oliveira",
    "CRMV-67890"
);

// Relacionando cliente e animais
cliente.addAnimal(animal1);
cliente.addAnimal(animal2);

// Relacionando animais e prontuários
animal1.setProntuario(prontuario1);
animal2.setProntuario(prontuario2);

// Relacionando veterinários e animais
veterinario1.addAnimal(animal1);
veterinario1.addAnimal(animal2);

veterinario2.addAnimal(animal1);

// Exibição
console.log("===== CLÍNICA VETERINÁRIA =====");

console.log("\nCliente:");
console.log("Nome:", cliente.getNome());
console.log("Telefone:", cliente.getTelefone());

console.log("\n===== ANIMAIS =====");

cliente.getAnimais().forEach(animal => {
    console.log("\nNome:", animal.getNome());
    console.log("Espécie:", animal.getEspecie());

    console.log("Cliente:", animal.getCliente().getNome());

    console.log("Prontuário:");
    console.log("Número:", animal.getProntuario().getNumero());
    console.log("Observações:", animal.getProntuario().getObservacoes());

    animal.listarVeterinarios();
});

console.log("\n===== REFERÊNCIAS CRUZADAS =====");

console.log(
    "Cliente possui",
    cliente.getAnimais().length,
    "animais."
);

console.log(
    "Rex possui",
    animal1.getVeterinarios().length,
    "veterinários."
);

console.log(
    "Dra. Ana atende",
    veterinario1.getAnimais().length,
    "animais."
);
