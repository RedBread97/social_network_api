const { connect, connections } = require('mongoose');

connect( )

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_api';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;