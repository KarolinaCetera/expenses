import React, { FC, ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";

type PrimaryButtonProps = ButtonProps & {
  children: ReactNode | ReactNode[];
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <Button
      sx={(theme) => ({
        borderRadius: 5,
        letterSpacing: 2,
        mx: 2,
        py: 1.5,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "none",
        background: "linear-gradient(180deg, rgba(151,56,209,1) 38%, rgba(132,63,251,1) 87%)",
      })}
      variant="contained"
      fullWidth
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
