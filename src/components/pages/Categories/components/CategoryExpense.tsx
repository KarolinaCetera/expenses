import { useState } from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import { Banner } from "components/index";

export const CategoryExpense = () => {
  // export const CategoryExpense = ({ expense: { expense, date } }: { expense: SingleExpense }) => {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  return (
    <Banner navigate={() => setIsExpenseModalOpen(true)}>
      {/*<Grid*/}
      {/*  item*/}
      {/*  xs={2}*/}
      {/*  alignItems="center"*/}
      {/*  sx={{ display: "flex", flexDirection: "column", background: "white", borderRadius: "5px" }}*/}
      {/*>*/}
      {/*  <Avatar sx={{ backgroundColor: "#FE8558" }}>{date.day}</Avatar>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={8.5} px={1}>*/}
      {/*  <Typography fontSize={14} fontWeight="bold">*/}
      {/*    {expense.name}*/}
      {/*  </Typography>*/}
      {/*  <Typography fontSize={14} color="#FE8558" fontWeight="bolder">*/}
      {/*    {expense.amount} {expense.currency}*/}
      {/*  </Typography>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={1.5}>*/}
      {/*  <IconButton>*/}
      {/*    <ChevronRightIcon />*/}
      {/*  </IconButton>*/}
      {/*</Grid>*/}
    </Banner>
  );
};
