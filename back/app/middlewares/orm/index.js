const Ticket = require('./models/ticket');
const Author = require('./models/author');
const Major = require('./models/major');
const GeographicalArea = require('./models/geographicalArea');

// add all the tables here
module.exports = {
  Ticket,
  Author,
  Major,
  GeographicalArea
};
