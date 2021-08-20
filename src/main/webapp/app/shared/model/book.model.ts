import dayjs from 'dayjs';

export interface IBook {
  id?: number;
  title?: string | null;
  description?: string | null;
  publicationDate?: string | null;
  price?: number | null;
}

export const defaultValue: Readonly<IBook> = {};
