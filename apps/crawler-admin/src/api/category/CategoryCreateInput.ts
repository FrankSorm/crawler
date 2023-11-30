export type CategoryCreateInput = {
  description: string;
  name: string;
  parentCategory?: string | null;
};
