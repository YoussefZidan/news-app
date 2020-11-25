import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const ThemeFlatPicker = ({ date, setDate }) => {
  return (
    <Flatpickr
      options={{ altInput: true, altFormat: "M j, Y", dateFormat: "M j, Y" }}
      data-enable-time
      value={date}
      onChange={(date) => {
        setDate(date);
      }}
    />
  );
};

export default ThemeFlatPicker;
