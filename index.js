const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Base de données simulée
let animals = [
    { id: 1, name: 'Azraelle', type: 'cat', owner: 'Tiphaine', city: 'Toulouse', gender: 'Female' },

    { id: 2, name: 'Pepito', type: 'dog', owner: 'Kevin', city: 'Orthez', gender: 'Male'},

    { id: 3, name: 'Triskell', type: 'cat', owner: 'Kevin', city: 'Orthez', gender: 'Male'},

    { id: 4, name: 'Dexter', type: 'cat', owner: 'Julie', city: 'Saint-Sulpice', gender: 'Male' },

    { id: 5, name: 'Brooklyn', type: 'cat', owner: 'Julie', city: 'Saint-Sulpice', gender: 'Female' },

    { id: 6, name: 'Marcel', type: 'cat',  owner: 'Julie', city: 'Saint-Sulpice', gender: 'Male' },

    { id: 7, name: 'Pomponette', type: 'cat',  owner: 'Julie', city: 'Saint-Sulpice', gender: 'Female' },

    { id: 8, name: 'Spinelle', type: 'bunny',  owner: 'Julia', city: 'Grenoble', gender: 'Female' },

    { id: 9, name: 'Groot', type: 'cat',  owner: 'Lisa', city: 'Langon', gender: 'Male' },

    { id: 10, name: 'Kitty Cat', type: 'cat',  owner: 'Alix', city: 'Toulouse', gender: 'Female' },

    { id: 11, name: 'Pharaon', type: 'horse',  owner: 'Lisa', city: 'Langon', gender: 'Male' },

    { id: 12, name: 'Temaro', type: 'horse',  owner: 'Lisa', city: 'Langon', gender: 'Male' },

    { id: 13, name: 'Kento', type: 'horse',  owner: 'Lisa', city: 'Langon', gender: 'Male' },

    { id: 14, name: 'Charlie', type: 'donkey',  owner: 'Tiphaine', city: 'Perigueux', gender: 'Male' },
];

// Route pour récupérer tous les animaux
app.get('/animals', (req, res) => {
    res.json(animals);
});

// Route pour récupérer un animal par ID
app.get('/animals/:id', (req, res) => {
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (!animal) {
        return res.status(404).send('Animal non trouvé');
    }
    res.json(animal);
});

// Route pour ajouter un nouvel animal
app.post('/animals', (req, res) => {
    const newAnimal = {
        id: animals.length + 1,
        ...req.body
    };
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

// Route pour mettre à jour un animal
app.put('/animals/:id', (req, res) => {
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (!animal) {
        return res.status(404).send('Animal non trouvé');
    }
    Object.assign(animal, req.body);
    res.json(animal);
});

// Route pour supprimer un animal
app.delete('/animals/:id', (req, res) => {
    const index = animals.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Animal non trouvé');
    }
    const deletedAnimal = animals.splice(index, 1);
    res.json(deletedAnimal);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});