import { Lesson } from '../types/lesson';
import { lessons } from '../data/lessons';

export const getAllLessons = (): Lesson[] => {
  return lessons;
};

export const getLessonById = (id: number): Lesson | null => {
  const lesson = lessons.find((lesson) => lesson.Id === id);
  return lesson || null;
};
