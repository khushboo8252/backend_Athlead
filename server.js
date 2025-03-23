const express = require("express");
const cors = require("cors");
const scraperRoutes = require("./routes/ScrapeRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/scraper", scraperRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
