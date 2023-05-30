import { FC, ReactNode } from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";

interface ElementProps {
  avatar: JSX.Element;
  color: string;
  title: string;
  additionalInformation?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Element: FC<ElementProps> = ({ avatar, title, additionalInformation, onClick, color }) => (
  <Grid item xs={6} onClick={onClick}>
    <Paper
      sx={{
        borderRadius: "15px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container flexDirection="column" p={2} alignItems="center" justifyContent="center">
        <Avatar sx={{ backgroundColor: color, width: 50, height: 50 }}>{avatar}</Avatar>
        <Grid container mt={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} mb={1}>
            <Typography textAlign="center" fontWeight="bolder" letterSpacing={1}>
              {title}
            </Typography>
          </Grid>
          {additionalInformation && additionalInformation}
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);
