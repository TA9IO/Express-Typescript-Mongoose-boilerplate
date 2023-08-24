import mongoose from 'mongoose';
const db = mongoose.connection;

export default (url : string) => {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log('we are connected... ')
  });
  return mongoose.connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
};

