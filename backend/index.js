require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));


const client = new MongoClient(process.env.MONGODB_URI);
let collection;

async function startServer() {
    await client.connect();
    const db = client.db('bachelor-thesis');
    collection = db.collection('news');

    // 1. Отримати всі новини
    app.get('/api/news', async (req, res) => {
        const news = await collection.find().toArray();
        res.json(news);
    });

    // 2. Отримати одну новину
    app.get('/api/news/:id', async (req, res) => {
        const news = await collection.findOne({ _id: new ObjectId(req.params.id) });
        res.json(news);
    });

    // 3. Додати нову
    app.post('/api/news', async (req, res) => {
        const result = await collection.insertOne(req.body);
        res.json(result);
    });

    // 4. Оновити
    app.put('/api/news/:id', async (req, res) => {
        await collection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.json({ updated: true });
    });

    // 5. Видалити
    app.delete('/api/news/:id', async (req, res) => {
        await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        res.json({ deleted: true });
    });

    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
}

startServer();
