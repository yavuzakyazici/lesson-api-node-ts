import { Request, Response } from 'express';
import { getAllLessons, getLessonById } from './lesson.service';

export const getLessons = (req: Request, res: Response) => {
  const lessons = getAllLessons();
  res.json(lessons);
};

export const getLesson = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const lesson = getLessonById(id);
  if (!lesson) {
    return res.status(404).json({ error: 'Lesson not found' });
  }
  res.json(lesson);
};