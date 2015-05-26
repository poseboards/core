var mongodb  = require('mongodb');

module.exports = function(mongoose) {

  var dbName = 'poseboards';

  mongoose.connect('mongodb://localhost:27017/' + dbName, function(error) {
    if (error) {
      console.log('Ensure you\'re connected');
    }
  });

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error: '));

  db.once('open', function callback() {
    console.log('Connected to ' + dbName + ' DB');
  });

};