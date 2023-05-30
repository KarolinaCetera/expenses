import { FC, useState } from "react";
import { Avatar, Grid, ListItem, ListItemAvatar, ListItemProps, ListItemText } from "@mui/material";
import { format } from "date-fns";
import { ElementModal } from "components";
import { FlowElement } from "typings";
import { categories } from "../../../../../consts";

type FlowElementProps = ListItemProps & {
  element: FlowElement;
};

export const ListElement: FC<FlowElementProps> = ({ element }) => {
  const { name, date, amount, type, currency, category: elementCategory } = element;
  const [elementModalOpen, setElementModalOpen] = useState<boolean>(false);

  const elementDate = format(new Date(date), "do MMM yyyy");
  const elementAmount = `${type === "expense" ? "-" : "+"} ${amount} ${currency}`;
  const categoryAssets = categories.find((category) => category.name === elementCategory);

  return (
    <>
      <ListItem
        onClick={() => setElementModalOpen(true)}
        sx={(theme) => ({
          justifyContent: "space-between",
          my: 1,
          p: 1,
          "&:hover": {
            background: theme.palette.grey[100],
            borderRadius: 5,
          },
        })}
      >
        <Grid container item xs={9} alignItems="center">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: categoryAssets?.color }}>{categoryAssets?.icon}</Avatar>
          </ListItemAvatar>
          <Grid>
            <ListItemText
              sx={(theme) => ({
                ".MuiTypography-root": {
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: 14,
                  letterSpacing: 1,
                },
              })}
              primary={name}
            />
            <ListItemText
              sx={(theme) => ({
                ".MuiTypography-root": {
                  color: theme.palette.grey[600],
                  fontSize: 10,
                },
              })}
              primary={elementDate}
            />
          </Grid>
        </Grid>
        <Grid container item xs={3}>
          <ListItemText
            sx={(theme) => ({
              ".MuiTypography-root": {
                color: type === "expense" ? theme.palette.error.light : theme.palette.success.light,
                fontSize: 12,
                textAlign: "right",
                fontWeight: theme.typography.fontWeightBold,
              },
            })}
            primary={elementAmount}
          />
        </Grid>
      </ListItem>
      <ElementModal open={elementModalOpen} element={element} setElementModalOpen={setElementModalOpen} />
    </>
  );
};
