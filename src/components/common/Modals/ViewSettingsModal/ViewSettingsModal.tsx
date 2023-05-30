import React, { FC, useCallback, useMemo, useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { PrimaryButton } from "../../Buttons";
import { CustomTextField } from "../../Form";

interface ViewSettingsModalProps {
  open: boolean;
  setViewSettingsModalOpen: (value: boolean) => void;
}

export const ViewSettingsModal: FC<ViewSettingsModalProps> = ({ open, setViewSettingsModalOpen }) => {
  const handleClose = useCallback(() => {
    setViewSettingsModalOpen(!open);
  }, [open, setViewSettingsModalOpen]);

  // TODO onClick addCategory

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          position: "absolute",
          top: 40,
          right: 10,
          width: "80%",
          zIndex: 40,
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <CustomTextField variant="filled" label="Category name" fullWidth value="" />
        <CustomTextField variant="filled" label="Category color" fullWidth value="" />
      </DialogContent>
      <DialogActions>
        <PrimaryButton>Add Category</PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};
