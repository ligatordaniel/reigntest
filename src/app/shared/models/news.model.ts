export interface NewsModel { 
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  objectID: string;
  isFavorite?: boolean;
  isRead?: boolean;
}