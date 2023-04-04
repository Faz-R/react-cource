export interface ICard {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string;
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  dimensions: string;
  medium_display: string;
  inscriptions: string;
  credit_line: string;
  catalogue_display: string;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: string;
  longitude: string;
  latlon: string;
  is_on_view: boolean;
  on_loan_display: string;
  gallery_title: string;
  gallery_id: number;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: number;
  style_title: string;
  alt_style_ids: number[];
  style_ids: number[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: number;
  alt_subject_ids: number[];
  subject_ids: number[];
  subject_titles: string[];
  material_id: string;
  alt_material_ids: number[];
  material_ids: string[];
  material_titles: string[];
  technique_id: number;
  alt_technique_ids: number[];
  technique_ids: number[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: number[];
  document_ids: number[];
  sound_ids: number[];
  video_ids: number[];
  text_ids: number[];
  section_ids: number[];
  section_titles: string[];
  site_ids: number[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
}
