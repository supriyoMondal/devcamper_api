const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

//Route files
const bootcamps = require("./routes/bootcamps");
const connectDb = require("./config/db");
// const logger = require("./middleware/logger");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDb();

const app = express();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server exit process
  server.close(() => process.exit(1));
});
