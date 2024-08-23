import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRoute from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//MIDDLEWARE
app.use(express.json());
app.use(cors())

// initilize route
app.use('/api/song', songRoute);
app.use('/api/album', albumRouter);
app.get('/', (req, res)=>res.send ('api is working'));


app.listen(port, ()=>console.log(`server is on at ${port}`));