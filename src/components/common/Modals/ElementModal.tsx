import React, { FC, useCallback, useMemo, useState } from "react";
import {
  capitalize,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tabs,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { CustomSelect, CustomTab, CustomTextField, PrimaryButton } from "components";
import { currencies } from "consts";
import { CurrencyType, FlowElement, FlowElements } from "typings";

type ElementModalProps = DialogProps & {
  open: boolean;
  setElementModalOpen: (value: boolean) => void;
  element?: FlowElement;
};

export const ElementModal: FC<ElementModalProps> = ({ open, setElementModalOpen, element }) => {
  const [pickedDate, setPickedDate] = useState<Date | null>(element ? new Date(element.date) : new Date());
  const [pickedCurrency, setPickedCurrency] = useState<CurrencyType>(element?.currency ?? currencies[0].id);
  const [tab, setTab] = useState(!element ? 0 : element.type === FlowElements.EXPENSE ? 0 : 1);

  const handleChangeType = useCallback((e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);

  const handleClose = useCallback(() => {
    setElementModalOpen(false);
  }, [setElementModalOpen]);

  const handleDateChange = useCallback((newValue: Date | null) => {
    setPickedDate(newValue);
  }, []);

  const handleCurrencyChange = useCallback((event: SelectChangeEvent<CurrencyType>) => {
    setPickedCurrency(event.target.value as CurrencyType);
  }, []);

  const buttonContent = useMemo(() => {
    const flowType = capitalize(tab === 0 ? FlowElements.EXPENSE : FlowElements.INCOME);
    return `Add ${flowType}`;
  }, [tab]);

  // TODO modal functionalities - set data and send to backend

  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      open={open}
      sx={{
        height: "90%",
        m: 0,
        p: 2,
      }}
    >
      <DialogTitle
        sx={(theme) => ({
          pb: 2,
          textAlign: "center",
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        {element ? `Edit ${element?.type}` : "Create flow element"}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs
          sx={{ background: "#FAF5FF", borderRadius: "10px", minHeight: 40 }}
          value={tab}
          onChange={handleChangeType}
          TabIndicatorProps={{ sx: { display: "none" } }}
        >
          {Object.values(FlowElements).map((element) => (
            <CustomTab key={element} label={element} />
          ))}
        </Tabs>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={pickedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTextField variant="filled" label="Name" fullWidth value={element ? element.name : ""} />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              variant="filled"
              label="Category"
              fullWidth
              value={element ? capitalize(element.category) : ""}
            />
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between" spacing={1} item xs={12}>
            <Grid item xs={9}>
              <CustomTextField
                type="number"
                variant="filled"
                label="Amount"
                value={element ? element.amount : ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Select onChange={(e) => handleCurrencyChange(e)} input={<CustomSelect />} value={pickedCurrency}>
                {currencies.map(({ id }) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <PrimaryButton>{buttonContent}</PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};
