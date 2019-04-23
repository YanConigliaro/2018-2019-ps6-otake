// simple example using objection and knex
const { Testimonial } = require('../../middlewares/orm');


module.exports = {
  getTestimonialByUniversity() {
    return Testimonial.query();
  },

  getTestimonials() {
    return Testimonial.query()
      .alias('t')
      .select('university.name as university', 't.first_name', 't.last_name', 't.email', 't.nationality', 't.text')
      .joinRelation('university');
  }
};
