
const BaseModel = require('./base-model');

module.exports = new BaseModel('exchange_university', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('city_id').references('id').inTable('city');
  t.integer('cost_of_living');
  t.integer('nb_of_place');
  t.integer('admission_rate');
  t.string('type_of_file', 20);
  t.string('small_picture', 255);
  t.string('big_picture', 255);
  t.string('presentation_text', 2000);
  t.string('admission_text', 2000);
  t.string('student_life_text', 2000);
  t.string('cost_of_living_text', 2000);
},
[
  {
    id: 0,
    name: 'Université Fédérale de Rio de Janeiro',
    city_id: 0,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 1,
    name: 'University of Guelph Consortium Western Ontario',
    city_id: 1,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 2,
    name: 'University of Windsor Consortium Western Ontario',
    city_id: 2,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 3,
    name: 'University of Western Ontario',
    city_id: 1,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 4,
    name: 'Memorial University of Newfoundland',
    city_id: 5,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 5,
    name: 'Université du Québec à Montréal',
    city_id: 6,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 6,
    name: 'Université de Sherbrooke',
    city_id: 4,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 7,
    name: 'Université Laval',
    city_id: 6,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 8,
    name: 'Université du Québec à Trois-Rivières',
    city_id: 7,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 9,
    name: 'Université du Québec à Rimouski',
    city_id: 8,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 10,
    name: 'Université du Québec en Abitibi-Témiscamingue',
    city_id: 9,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 11,
    name: 'Université du Québec en Outaouais',
    city_id: 10,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 12,
    name: 'Ecole de Technologie supérieure',
    city_id: 3,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 13,
    name: 'Université Bishop',
    city_id: 4,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 14,
    name: 'Université de Montréal',
    city_id: 3,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 15,
    name: 'Glendon College',
    city_id: 11,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 16,
    name: 'Université du Québec à Chicoutimi',
    city_id: 12,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 17,
    name: 'National Sun Yat Sen University',
    city_id: 13,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 18,
    name: 'University of Oklahoma',
    city_id: 14,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 19,
    name: 'City University Hong Kong (CityU)',
    city_id: 15,
    cost_of_living: 4,
    nb_of_place: 5,
    admission_rate: 20,
    type_of_file: '',
    small_picture: 'https://template.cityu.edu.hk/template/img/logos/cityu.png',
    big_picture: 'http://www.ejinsight.com/wp-content/uploads/2017/11/1700422_b146b95c23878cdc1e4b26e5c5903db6-692x360.jpg',
    presentation_text: 'With an emphasis on professional education and research, CityU produces graduates with the ability ' +
        'to anticipate and precipitate change in a rapidly-evolving, globalised world. In recent years, CityU has performed ' +
        'strongly in university rankings and is currently among the top 10 in Asia and the top 100 in the world. It is a ' +
        'fast-growing institution with undergraduate and postgraduate students and academic staff in business, creative media, ' +
        'data science, energy and environment, engineering, humanities and social sciences, law, science, and veterinary ' +
        'medicine and life sciences. Our curriculum emphasises innovation and creativity, and this principle underlies all ' +
        'aspects of the University\'s professional education and problem-driven research. Supported by novel learning spaces ' +
        'and facilities in new buildings, the curriculum embodies CityU\'s Strategic Plan for a new era of growth. CityU has ' +
        'established itself as one of the most innovative universities in Asia, pioneering research in diverse fields that are ' +
        'of high relevance on pressing issues. The success of its research programmes is reflected in both the amount of ' +
        'funding received and the number of projects funded as well as the quality of its research output. CityU\'s proximity ' +
        'to, and close ties with, mainland China, as well as its international partnerships and outlook, make the University ' +
        'ideally positioned to provide a dynamic learning and research environment for students and faculty from all over the ' +
        'world. Both the stature and sheer volume of CityU\'s relationships with global institutions continue to grow. Like the ' +
        'incredible city in which it plays such an integral role, CityU continues to move, innovate, learn, teach and prosper.',
    admission_text: 'https://www.admo.cityu.edu.hk/exchange_visiting/exchange/info/',
    student_life_text: 'http://www.cityu.edu.hk/geo/ies_abouthk.htm',
    cost_of_living_text: 'https://www.cityu.edu.hk/geo/ies_costlivenfin.htm'
  },
  {
    id: 20,
    name: 'Tianjin University',
    city_id: 16,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 21,
    name: 'Tongji University',
    city_id: 17,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 22,
    name: 'Xi\'an Jiaotong University',
    city_id: 18,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 23,
    name: 'Incheon National University',
    city_id: 19,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 24,
    name: 'Asian Institute of Technology',
    city_id: 20,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 25,
    name: 'Université de Danang',
    city_id: 21,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 26,
    name: 'Brandenburg University of Technology Cottbus',
    city_id: 22,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 27,
    name: 'Technische Universität Darmstadt',
    city_id: 23,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 28,
    name: 'Technische Universität Braunschweig',
    city_id: 24,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 29,
    name: 'Vrije Universiteit Brussel',
    city_id: 25,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 30,
    name: 'Haute Ecole de la Province de Liège',
    city_id: 26,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 31,
    name: 'Université Catholique de Louvain',
    city_id: 27,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 32,
    name: 'Université de Mons',
    city_id: 28,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 33,
    name: 'Aalborg University',
    city_id: 29,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 34,
    name: 'Technical University of Denmark',
    city_id: 30,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 35,
    name: 'Universitat Politècnica de Catalunya',
    city_id: 31,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 36,
    name: 'Universidade da Coruna',
    city_id: 32,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 37,
    name: 'University of Granada',
    city_id: 33,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 38,
    name: 'Universidad de las Palmas de Gran Canaria',
    city_id: 34,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 39,
    name: 'Universidad Politécnica de Madrid',
    city_id: 35,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 40,
    name: 'Universidad de Sevilla',
    city_id: 36,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 41,
    name: 'Budapest University of Technology & Economics',
    city_id: 37,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 42,
    name: 'Trinity College Dublin',
    city_id: 38,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 43,
    name: 'Alma Mater Studiorum - Universita di Bologna',
    city_id: 39,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 44,
    name: 'Politecnico di Torino',
    city_id: 40,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 45,
    name: 'Universita degli Studi di Milano',
    city_id: 41,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 46,
    name: 'Universita degli Studi di Verona',
    city_id: 42,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 47,
    name: 'Univesrity of l\'Aquila',
    city_id: 43,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 48,
    name: 'Università degli Studi della Campania "Luigi Vanvitelli"',
    city_id: 44,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 49,
    name: 'Sapienza Università di Roma',
    city_id: 45,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 50,
    name: 'Università degli Studi di Trento',
    city_id: 46,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 51,
    name: 'Norweigian University of Science & Technology',
    city_id: 47,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 52,
    name: 'Politechnika Gdanska. Gdansk University of Technology',
    city_id: 48,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 53,
    name: 'AGH University of Science & Technology',
    city_id: 49,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 54,
    name: 'Warsaw University of Technology',
    city_id: 50,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 55,
    name: 'Universidade Nova de Lisboa',
    city_id: 51,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 56,
    name: 'Universidade do Porto',
    city_id: 52,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 57,
    name: 'Lucian Blaga University of Sibiu',
    city_id: 53,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 58,
    name: 'West University of Timisoara',
    city_id: 54,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 59,
    name: 'Université Technique de Constructions Bucarest',
    city_id: 55,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 60,
    name: 'The University of Northumbria at Newcastle',
    city_id: 56,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 61,
    name: 'Linköpings Universitet Institute of Technology',
    city_id: 57,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 62,
    name: 'Universidad Nacional del Litoral',
    city_id: 58,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 63,
    name: 'Universidade Federal do Ceara',
    city_id: 59,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 64,
    name: 'Instituto Federal do Espirito Santo',
    city_id: 62,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 65,
    name: 'Cameroun Institut Africain d\'Informatique',
    city_id: 63,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 66,
    name: 'Politecnico di Bari',
    city_id: 64,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 67,
    name: 'Institut National des Postes et des Télécommunications',
    city_id: 65,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 68,
    name: 'Université Abdelmalek Essaadi',
    city_id: 66,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 69,
    name: 'Bern University of Applied Sciences',
    city_id: 67,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  },
  {
    id: 70,
    name: 'Togo Institut Africain d\'Informatique',
    city_id: 68,
    cost_of_living: 0,
    nb_of_place: 0,
    admission_rate: 0,
    type_of_file: '',
    small_picture: '',
    big_picture: '',
    presentation_text: '',
    admission_text: '',
    student_life_text: '',
    cost_of_living_text: ''
  }
]);
