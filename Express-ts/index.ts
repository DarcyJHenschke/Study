import express from "express";
import remindersRouter from "./routers/reminders";
const app = express();
app.use("/reminders", remindersRouter);
app.get("/", (req, res) => {
    res.send("hello World");
});
app.listen(8000, () => console.log("server started"));
