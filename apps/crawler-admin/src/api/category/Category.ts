export type Category = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  parentCategory: string | null;
  updatedAt: Date;
};
