// test/app.test.js
import tap from "tap";
import request from "supertest";
import app from "../src/app";

tap.test("GET /api/citas debe responder con el código de estado 200", async (t) => {
    const response = await request(app).get("/api/citas");
    t.equal(response.status, 200);
});

tap.test("GET /api/citas debe contener los datos esperados", async (t) => {
    const response = await request(app).get("/api/citas");
    t.equal(response.body.message, "Pacientes Encontrados con Exito");
});

tap.test("POST /api/citas debe responder con el código de estado 200", async (t) => {
    const response = await request(app).post("/api/citas");
    t.equal(response.status, 200);
});

tap.test("POST /api/citas debe contener los datos esperados", async (t) => {
    const response = await request(app).post("/api/citas");
    t.equal(response.body.message, "Nuevo Paciente Agregado");
});

tap.test("PUT /api/citas/:id debe responder con el código de estado 200", async (t) => {
    const response = await request(app).put("/api/citas/1");
    t.equal(response.status, 200);
});

tap.test("PUT /api/citas/:id debe contener los datos esperados", async (t) => {
    const response = await request(app).put("/api/citas/1");
    t.equal(response.body.message, "Datos del Paciente Actualizados");
});

tap.test("DELETE /api/citas/:id debe responder con el código de estado 200", async (t) => {
    const response = await request(app).delete("/api/citas/1");
    t.equal(response.status, 200);
});

tap.test("DELETE /api/citas/:id debe contener los datos esperados", async (t) => {
    const response = await request(app).delete("/api/citas/1");
    t.equal(response.body.message, "Paciente Eliminado");
});
