import { styled, Tab } from "@mui/material";

interface StyledTabProps {
  label: string;
}

export const CustomTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  minHeight: 40,
  borderRadius: "10px",
  textTransform: "capitalize",
  padding: 0,
  color: "black",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: 2,
  width: "50%",
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#FAF5FF",
    background: "linear-gradient(180deg, rgba(151,56,209,1) 38%, rgba(132,63,251,1) 87%)",
    border: "none",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));
