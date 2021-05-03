import express from 'express';

const router = express.Router();

const camp = [
    {
        name : "Bukit Alesano",
        addres : "Cijeruk, Kec. Cijeruk, Bogor, Jawa Barat 16740",
        long : 106.7770772,
        lat : -6.7074452,
        phone : "021-8766889",
        description : "Grassy mound popular for its views over Bogor city & nearby rice fields & hills, plus a campground."
    },
    {
        name : "Gayatri Camping Ground",
        addres : "Citeko, Kec. Cisarua, Bogor, Jawa Barat 16750, Indonesia",
        long : 106.954538,
        lat : -6.652368,
        phone : "081385917722",
        description : "Gayatri Mountain Adventure is an adventurous area of ​​12 hectares with beautiful native mountains in the middle of a tea plantation with a direct view of Mount Gede Pangrango and Mount Salak without any obstruction."
    }
]

router.get('/', (req, res) => {
    res.send(camp);
});

router.post('/', (req, res) => {
    const camp = req.body;

    res.send(`Camp with the name ${camp.name} added to the database!`);
});

export default router;