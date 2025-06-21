const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Підключення до MongoDB Atlas
const uri = "твій URI тут";
const client = new MongoClient(uri);
let collection;

async function connectDB() {
    await client.connect();
    const db = client.db('bachelor-thesis');
    collection = db.collection('news');
}
connectDB();

// 1. Отримати всі новини
app.get('/news', async (req, res) => {
    const allNews = await collection.find({}).toArray();
    res.json(allNews);
});

// 2. Отримати одну новину за ID
app.get('/news/:id', async (req, res) => {
    const id = req.params.id;
    const news = await collection.findOne({ _id: new ObjectId(id) });
    res.json(news);
});

// 3. Видалити новину за ID
app.delete('/news/:id', async (req, res) => {
    const id = req.params.id;
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Новину видалено' });
});

// 4. Оновити новину за ID
app.put('/news/:id', async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
    );
    res.json({ message: 'Новину оновлено' });
});

// 5. Додати нову новину
app.post('/news', async (req, res) => {
    const newDoc = req.body;
    const result = await collection.insertOne(newDoc);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
