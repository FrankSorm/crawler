import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Parent Category" source="parentCategory" />
      </SimpleForm>
    </Create>
  );
};
