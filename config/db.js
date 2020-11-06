const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

module.exports = connectDb;
