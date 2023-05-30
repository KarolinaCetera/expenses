import { useState } from "react";
import { Grid, Tabs, Typography } from "@mui/material";
import { CustomTab } from "components";
import { userFlow } from "consts";
import { FlowElements } from "typings";
import { ElementsList } from "./ElementsList";

export const FlowList = () => {
  const [tab, setTab] = useState(0);

  const { expense, income } = userFlow;

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Grid width="100%" my={2}>
      <Typography fontWeight="bold" letterSpacing={1} fontSize={(theme) => theme.typography.pxToRem(24)}>
        Cash flow
      </Typography>
      <Tabs
        sx={{ background: "#FAF5FF", borderRadius: "10px", minHeight: 40, mt: 2 }}
        value={tab}
        TabIndicatorProps={{ sx: { display: "none" } }}
        onChange={handleChange}
      >
        {Object.values(FlowElements).map((element) => (
          <CustomTab key={element} label={element} />
        ))}
      </Tabs>
      <Grid height="40vh">
        <ElementsList elements={tab === 0 ? expense : income} />
      </Grid>
    </Grid>
  );
};
