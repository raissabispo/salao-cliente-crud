import express, { Application } from "express";
import cors from "cors";
import Routes from "./routes/routes";
import { AppDataSource } from "./db/data-source";

const app: Application = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new Routes(app);

AppDataSource.initialize()
    .then(() => {
    
        console.log("Database is running.");
    })
    .catch((error) => {
        console.log(error);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
