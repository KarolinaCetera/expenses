import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, GridProps } from "@mui/material";
import { NotificationModal, Navigation, Header } from "components";

type ContentProps = GridProps & {
  children: JSX.Element | JSX.Element[];
  title?: string;
  onClickHeader?: () => void;
  headerOpen?: boolean;
};

export const Content = ({ title, children, onClickHeader, headerOpen, ...gridProps }: ContentProps) => {
  const { pathname } = useLocation();
  const [notificationModalOpen, setNotificationModalOpen] = useState<boolean>(false);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" sx={{ position: "absolute" }}>
        <Header
          title={title}
          pathname={pathname}
          headerOpen={headerOpen}
          onClickHeader={onClickHeader}
          setNotificationModalOpen={setNotificationModalOpen}
        />
        <Grid
          p={2}
          sx={{
            height: "80%",
            overflow: "auto",
            position: "fixed",
            top: "10%",
          }}
          {...gridProps}
        >
          {children}
        </Grid>
        <Navigation />
      </Grid>
      <NotificationModal open={notificationModalOpen} setNotificationModalOpen={setNotificationModalOpen} />
    </>
  );
};
