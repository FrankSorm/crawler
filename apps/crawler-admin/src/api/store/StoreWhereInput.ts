import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StoreWhereInput = {
  category?: StringNullableFilter;
  company?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
