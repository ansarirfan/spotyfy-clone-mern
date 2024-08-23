
import { addAlbum, listAlbum, removeAlbum } from '../controller/alumController.js';
import exppres from 'express';
import upload from '../middleware/multer.js';

const albumRouter = exppres.Router();


albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove', removeAlbum);


export default albumRouter