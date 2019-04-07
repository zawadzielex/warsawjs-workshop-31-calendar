const PORT = process.env.PORT || 5000;
const SECRET = process.env.SECRET;

const SESSION_OPTIONS = {
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
};

const DB_HOST = process.env.DB_HOST;

module.exports = {
  PORT, SESSION_OPTIONS
};
