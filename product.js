const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open")
    })
    .catch(err => {
        console.log("Oh no error!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model('Product', productSchema);

/* const bike = new Product({ name: 'bike Helmet'},{price: 99}, {new: true, })
bike.save()
    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log('Ohh no error', err);
    }) */

Product.findOneAndUpdate({ name: 'bike Helmet'},{price: 99,categories:['cycling'], size:'XS'})
bike.save()
    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log('Ohh no error', err);
    })