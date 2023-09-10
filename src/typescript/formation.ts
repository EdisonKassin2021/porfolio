export interface IFormation {
  id?: number;
  title: string;
  school: string;
  end_year?: number;
  start_year: number;
  description?: string;
  year_validated?: boolean;
  city?: string;
  country?: string;
  final_note?: string;
  created_at: Date;
  edited_at?: Date;
  in_progress?: boolean;
}
