import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ message: `Hello from ${req.baseUrl}` });
});

export default router;
