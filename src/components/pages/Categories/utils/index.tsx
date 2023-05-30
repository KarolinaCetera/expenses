import CheckroomIcon from "@mui/icons-material/Checkroom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ExtensionIcon from "@mui/icons-material/Extension";

export const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "clothes":
      return <CheckroomIcon sx={{ color: "white" }} />;
    case "bills":
      return <AttachMoneyIcon sx={{ color: "white" }} />;
    case "grocery":
      return <RestaurantIcon sx={{ color: "white" }} />;
    case "fun":
      return <CelebrationIcon sx={{ color: "white" }} />;
    case "restaurant":
      return <FastfoodIcon sx={{ color: "white" }} />;
    default:
      return <ExtensionIcon sx={{ color: "white" }} />;
  }
};
