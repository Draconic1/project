export interface Discipline {
  discipline_id?: string;
  discipline_title: string;
  discipline_title_short?: string;
  discipline_status?: string;
  end_date?: string | null;
}

export type DisciplineState = {
  object: Discipline[];
};

export const initialState: DisciplineState = {
  object: [],
};
