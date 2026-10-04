const express = require("express");
const routes = require("./routes/index.js");
const sequelize = require("./config/database.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", routes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
  }
})();