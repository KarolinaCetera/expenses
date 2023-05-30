import { InputBase, styled } from "@mui/material";

export const CustomSelect = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 20,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #7183f1",
    fontSize: 16,
    padding: "16px 0 17px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 20,
      borderColor: "#7183f1",
    },
  },
}));
