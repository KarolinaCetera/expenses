import { useLocation, useNavigate } from "react-router-dom";
import { CategoriesButton, CategoryExpense, Content } from "components/index";
import { Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

interface LocationState {
  state: {
    type: string;
  };
}

export const Category = () => {
  const location = useLocation();
  const {
    state: { type },
  } = location as LocationState;
  const navigate = useNavigate();

  // const { name, expenses } = dummyCategories.find(({ name }) => name === type) as ExpenseCategory;

  // choose month functionality

  const ButtonContent = () => (
    <Grid container>
      <ArrowBack />
      <Typography textTransform="none" sx={{ mx: 1 }}>
        Back to Categories
      </Typography>
    </Grid>
  );

  return (
    <Content title="category">
      <p>Kategorie</p>
      <CategoriesButton action={() => navigate("/categories")} content={<ButtonContent />} />
    </Content>
  );
};
