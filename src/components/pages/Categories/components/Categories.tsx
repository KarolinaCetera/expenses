import { useState } from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import { Content, ViewSettingsModal } from "components";
import { categories, userFlow } from "consts";
import { useNavigate } from "react-router-dom";
import { CategoryBannerContent } from "./CategoryBannerContent";
import { CategoryType } from "typings";

// TODO context menu for categories on header?

export const Categories = () => {
  const navigate = useNavigate();

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const navigateToCategory = (category: CategoryType) => {
    navigate(`${category.name.toLowerCase()}`, { state: { type: category.name.toLowerCase() } });
  };

  return (
    <>
      <Content onClickHeader={() => setIsContextMenuOpen(!isContextMenuOpen)} headerOpen={isContextMenuOpen}>
        <Grid container justifyContent="space-between" spacing={1}>
          {categories.map((category) => {
            const expense = userFlow.expense.filter((element) => element.category === category.name);
            const income = userFlow.income.filter((element) => element.category === category.name);

            return (
              <Grid key={category.name} onClick={() => navigateToCategory(category)} item xs={12} my={0.5}>
                <Paper
                  sx={{
                    borderRadius: 3,
                    background: "linear-gradient(180deg, rgba(151,56,209,.1) 38%, rgba(132,63,251,.1) 87%)",
                  }}
                >
                  <Grid container justifyContent="space-between" alignItems="center" p={1}>
                    <Grid item xs={2}>
                      <Avatar sx={{ backgroundColor: category.color, width: 60, height: 60 }}>{category.icon}</Avatar>
                    </Grid>
                    <Grid item xs={9} container justifyContent="center">
                      <CategoryBannerContent type="expense" flowElement={expense} />
                      <CategoryBannerContent type="income" flowElement={income} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Content>
      <ViewSettingsModal open={isContextMenuOpen} setViewSettingsModalOpen={setIsContextMenuOpen} />
    </>
  );
};
