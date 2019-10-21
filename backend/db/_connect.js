const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://vtanh195:7N7F3pp5P5JJeoy2@cluster0-tjkhx.mongodb.net/test',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

var db = mongoose.connection;
db.on('error', () => {
  console.log('Error');
});
db.once('open', function() {
  // we're connected!
  console.log('#Connecting Database Successfully');
});
