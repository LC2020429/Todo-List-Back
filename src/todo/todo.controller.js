import Todo from "./todo.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener las tareas",
      error: err.message,
    });
  }
};

export const addTask = async (req, res) => {
  try {
    const { title, importance, status } = req.body;
    const task = new Todo({ title, importance, status });
    await task.save();
    return res.status(201).json({
      success: true,
      task,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error al agregar la tarea",
      error: err.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Todo.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Tarea no encontrada",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Tarea eliminada",
      task,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al eliminar la tarea",
      error: err.message,
    });
  }
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const task = await Todo.findByIdAndUpdate(id, data, { new: true });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Tarea no encontrada",
      });
    }
    return res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error al editar la tarea",
      error: err.message,
    });
  }
};

export const findByImportance = async (req, res) => {
  try {
    const { importance } = req.params;
    const tasks = await Todo.find({ importance });
    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error al buscar por prioridad",
      error: err.message,
    });
  }
};
