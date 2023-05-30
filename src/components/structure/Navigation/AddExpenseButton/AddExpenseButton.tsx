import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, SxProps, Theme } from "@mui/material";

interface AddExpenseButtonProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

export const AddExpenseButton: FC<AddExpenseButtonProps> = ({ onClick, sx = [] }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={[
        {
          position: "absolute",
          bottom: 35,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          borderRadius: "50%",
          background: "linear-gradient(180deg, rgba(151,56,209,1) 38%, rgba(132,63,251,1) 87%)",
          boxShadow: "0px 0px 24px 0px rgba(109, 116, 191, 1)",
          ".MuiIconButton-root ": {
            margin: 0,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <AddIcon fontSize="large" sx={{ color: "white" }} />
    </IconButton>
  );
};
