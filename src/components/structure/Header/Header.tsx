import { FC } from "react";
import { capitalize, Grid, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp, Notifications, Settings } from "@mui/icons-material";
import { routes } from "routes";
import { HeaderIcon } from "./HeaderIcon";

interface HeaderProps {
  pathname: string;
  setNotificationModalOpen: (value: boolean) => void;
  onClickHeader?: () => void;
  title?: string;
  headerOpen?: boolean;
}

export const Header: FC<HeaderProps> = ({ title, pathname, headerOpen, onClickHeader, setNotificationModalOpen }) => {
  const HeaderControl = () =>
    headerOpen ? <KeyboardArrowUp onClick={onClickHeader} /> : <KeyboardArrowDown onClick={onClickHeader} />;

  return (
    <Grid
      component="header"
      container
      alignItems="center"
      justifyContent="space-between"
      item
      xs={12}
      height="10%"
      p={2}
      sx={{
        position: "fixed",
        top: 0,
        background: "white",
      }}
    >
      <HeaderIcon icon={<Settings fontSize="medium" />} />
      <Grid container item xs={10} justifyContent="center">
        <Typography
          sx={(theme) => ({ color: "#4d4d4d", fontSize: theme.typography.pxToRem(20) })}
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          letterSpacing={2}
        >
          {capitalize((routes.find(({ path }) => path.includes(pathname))?.name ?? title) as string)}
        </Typography>
        {onClickHeader && <HeaderControl />}
      </Grid>
      <HeaderIcon icon={<Notifications fontSize="medium" />} onClick={() => setNotificationModalOpen(true)} />
    </Grid>
  );
};
