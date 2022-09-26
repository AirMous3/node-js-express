import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;
const DATA_BASE_URL = `mongodb+srv://user:user@cluster0.ktdg5ds.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.status(200).json('server is working');
});

async function startApp() {
    try {
        await mongoose.connect(DATA_BASE_URL);
        app.listen(PORT, () => {
            console.log('SERVER START ON PORT' + PORT);
        });

    } catch (e) {
        console.log(e);
    }
}

startApp();
