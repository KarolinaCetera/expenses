import { FC, ReactNode } from "react";
import { Button } from "@mui/material";

interface CategoriesButtonsProps {
  action: () => void;
  content: ReactNode;
}

export const CategoriesButton: FC<CategoriesButtonsProps> = ({ action, content }) => (
  <Button
    onClick={action}
    sx={{
      background: "linear-gradient(180deg, rgba(151,56,209,1) 38%, rgba(132,63,251,1) 87%)",
      borderRadius: "50px",
      py: 1,
    }}
    variant="contained"
  >
    {content}
  </Button>
);
