import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./shared/lib/db";

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  connectDB();
});
