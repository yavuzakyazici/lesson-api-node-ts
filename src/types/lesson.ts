export type Video = {
  Id: number;
  LessonId: number;
  VideoUrl: string;
  LanguageId: string;
  Title: string;
  VideoDescription?: string;
};

export type Image = {
  Id: number;
  LessonId: number;
  ImageUrl: string;
  ImageKey?: string;
};

export type Lesson = {
  Id: number;
  IsPro: boolean;
  IsMasterClass: boolean;
  Title: string;
  LanguageId: string;
  LessonDescription: string;
  PosterUrl: string;
  TitleVideoUrl?: string | null;
  Videos?: Video[];
  Images?: Image[];
};
