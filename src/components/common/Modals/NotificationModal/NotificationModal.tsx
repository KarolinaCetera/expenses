import React, { FC, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Notification } from "./Notification";

interface NotificationModalProps {
  open: boolean;
  setNotificationModalOpen: (value: boolean) => void;
}

export const NotificationModal: FC<NotificationModalProps> = ({ open, setNotificationModalOpen }) => {
  const handleClose = useCallback(() => {
    setNotificationModalOpen(false);
  }, [setNotificationModalOpen]);

  // TODO Notifications
  // Integrate icon with categories
  // Add read/unread props
  // integrate with future backend
  // Action on click?
  // Adjust notification content

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "80%",
          height: "50%",
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={(theme) => ({
          pb: 1,
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        Notifications
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <List>
          <Notification read={false} />
          <Notification read={true} />
          <Notification read={true} />
        </List>
      </DialogContent>
    </Dialog>
  );
};
