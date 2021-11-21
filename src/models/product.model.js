const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema ({
    name: { type: String, required: true },
    describe: { type: String, maxlength: 1000 },
    summary: {type: String},
    image: { type: String },
    price: {type: Number},
    quantity: {type: Number},
    cateId: { type: Schema.Types.ObjectId, ref: 'Category'},
    slug: { type: String, slug: 'name', unique: true },
}, {timestamps: true})

module.exports = mongoose.model('Product', Product);