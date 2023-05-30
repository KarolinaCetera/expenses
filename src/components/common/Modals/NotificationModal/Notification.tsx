import React, { FC, useCallback, useState } from "react";
import { Box, Grid, ListItem, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PaidIcon from "@mui/icons-material/Paid";

interface NotificationProps {
  read: boolean;
}

export const Notification: FC<NotificationProps> = ({ read }) => {
  const [isRead, setIsRead] = useState<boolean>(read);

  const toggleRead = useCallback(() => {
    setIsRead(!isRead);
  }, [isRead]);

  return (
    <ListItem disablePadding onClick={toggleRead}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        columnSpacing={1}
        px={1}
        py={2}
        mx={1}
        sx={{ borderRadius: 2, "&:hover": { background: "#2412de0d" } }}
      >
        <Grid item xs={1}>
          <Box>
            {!isRead && (
              <FiberManualRecordIcon
                fontSize="small"
                sx={{
                  color: "#843ffb",
                  width: 12,
                  height: 12,
                }}
              />
            )}
          </Box>
        </Grid>
        <Grid container item xs={2}>
          <Box
            sx={{
              background: "linear-gradient(180deg, rgba(151,56,209,1) 38%, rgba(132,63,251,1) 87%)",
              borderRadius: 2,
              height: 30,
              width: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PaidIcon sx={{ color: "white" }} fontSize="small" />
          </Box>
        </Grid>
        <Grid container item xs={9} justifyContent="space-between">
          <Box>
            <Typography sx={{ fontSize: 12 }} fontWeight="bold">
              Income
            </Typography>
            <Typography sx={{ fontSize: 10 }}>New income: Salary. Amount: 2000 EUR</Typography>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};
