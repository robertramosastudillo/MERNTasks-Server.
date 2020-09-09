const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middlewares/auth");
const { check } = require("express-validator");

// Crea tareas
// api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El nombre de la tarea es obligatorio").not().isEmpty()],
  [check("proyecto", "El Proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

// Obtener las tareas por proyecto
router.get("/", auth, tareaController.obtenerTareas);

// Actualizar Tarea
router.put("/:id", auth, tareaController.actualizarTarea);

// Eliminar Tarea
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;
