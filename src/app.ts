import express from 'express';
import lessonRoutes from './lessons/lesson.routes';

const app = express();

app.use(express.json());
app.use('/api/lessons', lessonRoutes);

export default app;
