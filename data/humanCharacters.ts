import { CascadingOption } from '../types';

export const characterOptions: CascadingOption[] = [
    // Level 1: Type
    { id: 'human', name: 'Human', parentId: null },
    { id: 'animal', name: 'Animal', parentId: null },
    { id: 'mythical_creature', name: 'Mythical Creature', parentId: null },

    // --- ANIMAL HIERARCHY ---
    // Level 2: Animal Type
    { id: 'animal_mammal', name: 'Mammal', parentId: 'animal' },
    { id: 'animal_bird', name: 'Bird', parentId: 'animal' },
    { id: 'animal_reptile', name: 'Reptile', parentId: 'animal' },
    { id: 'animal_fish', name: 'Fish', parentId: 'animal' },
    { id: 'animal_insect', name: 'Insect', parentId: 'animal' },

    // Level 3: Mammal Species
    { id: 'animal_mammal_dog', name: 'Dog', parentId: 'animal_mammal' },
    { id: 'animal_mammal_cat', name: 'Cat', parentId: 'animal_mammal' },
    { id: 'animal_mammal_horse', name: 'Horse', parentId: 'animal_mammal' },
    { id: 'animal_mammal_bear', name: 'Bear', parentId: 'animal_mammal' },
    { id: 'animal_mammal_wolf', name: 'Wolf', parentId: 'animal_mammal' },
    { id: 'animal_mammal_lion', name: 'Lion', parentId: 'animal_mammal' },
    { id: 'animal_mammal_tiger', name: 'Tiger', parentId: 'animal_mammal' },
    { id: 'animal_mammal_fox', name: 'Fox', parentId: 'animal_mammal' },
    { id: 'animal_mammal_deer', name: 'Deer', parentId: 'animal_mammal' },
    { id: 'animal_mammal_elephant', name: 'Elephant', parentId: 'animal_mammal' },
    { id: 'animal_mammal_dolphin', name: 'Dolphin', parentId: 'animal_mammal' },

    // Level 4: Dog Breeds
    { id: 'animal_mammal_dog_gsd', name: 'German Shepherd', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "German Shepherd" }) },
    { id: 'animal_mammal_dog_husky', name: 'Siberian Husky', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "Siberian Husky", "color": "Black and white with blue eyes" }) },
    { id: 'animal_mammal_dog_malamute', name: 'Alaskan Malamute', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "Alaskan Malamute" }) },
    { id: 'animal_mammal_dog_retriever', name: 'Golden Retriever', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "Golden Retriever" }) },
    { id: 'animal_mammal_dog_poodle', name: 'Poodle', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "Poodle" }) },
    { id: 'animal_mammal_dog_beagle', name: 'Beagle', parentId: 'animal_mammal_dog', jsonBlock: JSON.stringify({ "species": "Dog", "breed": "Beagle" }) },

    // Level 4: Cat Breeds
    { id: 'animal_mammal_cat_persian', name: 'Persian', parentId: 'animal_mammal_cat', jsonBlock: JSON.stringify({ "species": "Cat", "breed": "Persian" }) },
    { id: 'animal_mammal_cat_siamese', name: 'Siamese', parentId: 'animal_mammal_cat', jsonBlock: JSON.stringify({ "species": "Cat", "breed": "Siamese" }) },
    { id: 'animal_mammal_cat_mainecoon', name: 'Maine Coon', parentId: 'animal_mammal_cat', jsonBlock: JSON.stringify({ "species": "Cat", "breed": "Maine Coon" }) },
    { id: 'animal_mammal_cat_shorthair', name: 'American Shorthair (Tabby)', parentId: 'animal_mammal_cat', jsonBlock: JSON.stringify({ "species": "Cat", "breed": "American Shorthair", "color": "Tabby pattern" }) },
    
    // Level 3: Bird Species
    { id: 'animal_bird_eagle', name: 'Eagle', parentId: 'animal_bird' },
    { id: 'animal_bird_owl', name: 'Owl', parentId: 'animal_bird' },
    { id: 'animal_bird_pigeon', name: 'Pigeon', parentId: 'animal_bird' },

    // Level 4: Owl Species
    { id: 'animal_bird_owl_snowy', name: 'Snowy Owl', parentId: 'animal_bird_owl', jsonBlock: JSON.stringify({ "species": "Snowy Owl" }) },
    
    // Level 3: Reptile Species
    { id: 'animal_reptile_snake', name: 'Snake', parentId: 'animal_reptile' },
    { id: 'animal_reptile_lizard', name: 'Lizard', parentId: 'animal_reptile' },
    { id: 'animal_reptile_crocodile', name: 'Crocodile', parentId: 'animal_reptile' },

    // --- MYTHICAL CREATURES ---
    { id: 'mythical_dragon', name: 'Dragon', parentId: 'mythical_creature' },
    { id: 'mythical_dragon_red', name: 'Red Dragon', parentId: 'mythical_dragon', jsonBlock: JSON.stringify({ "creature": "Dragon", "type": "Red", "age": "Ancient" }, null, 2) },
    { id: 'mythical_griffin', name: 'Griffin', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Griffin", "age": "Adult" }, null, 2) },
    { id: 'mythical_unicorn', name: 'Unicorn', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Unicorn", "type": "Forest" }, null, 2) },
    { id: 'mythical_phoenix', name: 'Phoenix', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Phoenix", "age": "Adult" }, null, 2) },
    { id: 'mythical_hydra', name: 'Hydra', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Hydra" }, null, 2) },
    { id: 'mythical_minotaur', name: 'Minotaur', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Minotaur" }, null, 2) },
    { id: 'mythical_siren', name: 'Siren', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Siren" }, null, 2) },
    { id: 'mythical_cyclops', name: 'Cyclops', parentId: 'mythical_creature', jsonBlock: JSON.stringify({ "creature": "Cyclops" }, null, 2) },
];