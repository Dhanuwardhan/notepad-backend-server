const Note = require("../models/Note");

module.exports = {
  async getAll(req, res) {
    try {
      const notes = await Note.findAll();
      res.json({
        status: "success",
        messages: "List of notes fetched successfully",
        data: notes,
        error: null,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        messages: "Failed to fetch notes",
        data: null,
        error: err.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const note = await Note.findByPk(req.params.id);
      if (!note)
        return res.status(404).json({
          status: "error",
          messages: "Note not found",
          data: null,
          error: "Note not found",
        });
      res.json({
        status: "success",
        messages: "Note fetched successfully",
        data: note,
        error: null,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        messages: "Failed to fetch note",
        data: null,
        error: err.message,
      });
    }
  },

  async create(req, res) {
    try {
      const { title, content, color, date } = req.body;
      const note = await Note.create({ title, content, color, date });
      res.status(201).json({
        status: "success",
        messages: "Note created successfully",
        data: note,
        error: null,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        messages: "Failed to create note",
        data: null,
        error: err.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { title, content, color, date } = req.body;
      const note = await Note.findByPk(req.params.id);
      if (!note)
        return res.status(404).json({
          status: "error",
          messages: "Note not found",
          data: null,
          error: "Note not found",
        });
      await note.update({ title, content, color, date });
      res.json({
        status: "success",
        messages: "Note updated successfully",
        data: note,
        error: null,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        messages: "Failed to update note",
        data: null,
        error: err.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const note = await Note.findByPk(req.params.id);
      if (!note)
        return res.status(404).json({
          status: "error",
          messages: "Note not found",
          data: null,
          error: "Note not found",
        });
      await note.destroy();
      res.json({
        status: "success",
        messages: "Note deleted successfully",
        data: null,
        error: null,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        messages: "Failed to delete note",
        data: null,
        error: err.message,
      });
    }
  },
};
