import { OutlinedInputProps, styled, TextField, TextFieldProps } from "@mui/material";

export const CustomTextField = styled((props: TextFieldProps) => (
  <TextField InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  "& .MuiInputBase-root": {
    border: "1px solid #7183f1",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
    },
  },
}));
