export interface ResponseCard {
  preference: string | null;
  pagination: Pagination;
  data: Daum[];
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
}

interface Daum {
  _score: number;
  thumbnail: Thumbnail;
  api_model: string;
  is_boosted: boolean;
  api_link: string;
  id: number;
  title: string;
  timestamp: string;
}

interface Thumbnail {
  alt_text: string;
  width: number;
  lqip: string;
  height: number;
}
