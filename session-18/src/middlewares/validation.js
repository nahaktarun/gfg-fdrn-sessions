import { body, validationResult } from "express-validator";

export const validateBook = [
  body("name").notEmpty().trim(),
  body("author").notEmpty().trim(),
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    next();
  },
];
