import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export default function DateTime({
  value,
  setValue,
  disablePast = false,
  minDateTime = null
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField {...props} className="no-input-border" size="small" />
        )}
        label=""
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        minDateTime={minDateTime}
      />
    </LocalizationProvider>
  );
}
