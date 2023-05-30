import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const Layout = () => (
  <Box component="main" sx={{ height: "100vh" }}>
    <Outlet />
  </Box>
);
