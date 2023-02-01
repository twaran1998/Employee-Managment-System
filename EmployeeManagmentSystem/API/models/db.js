const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:test@cluster0.s2z39.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'myFirstDatabase' });