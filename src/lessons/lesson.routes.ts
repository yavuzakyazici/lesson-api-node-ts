import { Router } from 'express';
import { getLessons, getLesson } from './lesson.controller';
const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Lessons endpoint works!' });
});

router.get('/all/', getLessons);
router.get('/:id', getLesson);

export default router;
