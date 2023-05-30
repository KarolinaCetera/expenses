import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

type IconProps = SvgIconProps & {
  icon: JSX.Element;
};

export const Icon: FC<IconProps> = ({ icon, ...props }) => {
  return <SvgIcon {...props}>{icon}</SvgIcon>;
};
