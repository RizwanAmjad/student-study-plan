const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");
const courses = require("./routes/courses");
const users = require("./routes/users");
const studyPlan = require("./routes/studyPlan");
const enroll = require("./routes/enroll");
const sequelize = require("./models");

const app = express();

app.use(cors());

app.use(express.json());

sequelize.sync().then(() => console.log("Database is ready"));

app.use("/api/auth", auth);
app.use("/api/courses", courses);
app.use("/api/users", users);
app.use("/api/study-plan", studyPlan);
app.use("/api/enroll", enroll);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
