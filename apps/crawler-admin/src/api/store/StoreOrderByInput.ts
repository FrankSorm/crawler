import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  category?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
