import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
const path = require("path")
// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Sistema de Citas Medicas",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/language.routes.js")}`]
}



// Routes
app.get("/api/citas", (req, res) => {
    res.json({ message: "Pacientes Encontrados con Exito" });
});

app.post("/api/citas", (req, res) => {
    // Aquí puedes manejar la lógica para el POST /api/citas
    // Por ejemplo, agregar un nuevo paciente a la base de datos y enviar la respuesta.
    res.json({ message: "Nuevo Paciente Agregado" });
});

app.put("/api/citas/:id", (req, res) => {
    // Aquí puedes manejar la lógica para el PUT /api/citas/:id
    // Por ejemplo, actualizar la información de un paciente en la base de datos y enviar la respuesta.
    res.json({ message: "Datos del Paciente Actualizados" });
});

app.delete("/api/citas/:id", (req, res) => {
    // Aquí puedes manejar la lógica para el DELETE /api/citas/:id
    // Por ejemplo, eliminar un paciente de la base de datos y enviar la respuesta.
    res.json({ message: "Paciente Eliminado" });
});

app.use("/api/citas", languageRoutes);
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
export default app;
