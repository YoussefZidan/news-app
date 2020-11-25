import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const ThemeFlatPicker = ({ date, setDate }) => {
  return (
    <Flatpickr
      options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
      data-enable-time
      value={date}
      onChange={(date) => {
        setDate(date);
      }}
    />
  );
};

export default ThemeFlatPicker;
