import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Items = new Schema({
    name: String,
    image: String,
    id: String,
    description: String,
    price: String
});

const itemsModel = mongoose.model('items', Items);

export default itemsModel;