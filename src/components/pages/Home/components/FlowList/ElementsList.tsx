import { FC } from "react";
import { List, ListProps } from "@mui/material";
import { FlowElement } from "typings";
import { ListElement } from "components";

type ElementsListProps = ListProps & {
  elements: FlowElement[];
};

export const ElementsList: FC<ElementsListProps> = ({ elements }) => {
  return (
    <List dense={true} sx={{ height: "100%", overflow: "scroll" }}>
      {elements
        .sort((b, a) => +new Date(a.date) - +new Date(b.date))
        .map((element) => (
          <ListElement key={`${element.name} ${new Date(element.date)} ${element.amount}`} element={element} />
        ))}
    </List>
  );
};
