import { Grid, GridProps, Paper } from "@mui/material";

type BannerProps = GridProps & {
  children: JSX.Element | JSX.Element[];
  navigate: () => void;
};

export const Banner = ({ children, navigate, ...gridProps }: BannerProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
        width: "100%",
        mb: 1,
        background: "linear-gradient(180deg, rgba(151,56,209,.1) 38%, rgba(132,63,251,.1) 87%)",
      }}
    >
      <Grid container alignItems="center" onClick={navigate} {...gridProps}>
        {children}
      </Grid>
    </Paper>
  );
};
