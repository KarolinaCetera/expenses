import { FC } from "react";
import { Grid, IconButton } from "@mui/material";

interface HeaderIconProps {
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeaderIcon: FC<HeaderIconProps> = ({ icon, onClick }) => (
  <Grid item xs={1} container justifyContent="center">
    <IconButton onClick={onClick}>{icon}</IconButton>
  </Grid>
);
