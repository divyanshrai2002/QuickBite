import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT", // Specify the database name here
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.error(`Error connecting to the database: ${err.message}`);
      process.exit(1); // Exit process on database connection failure
    });
};
