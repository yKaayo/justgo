import Svg, { Polyline } from "react-native-svg";

const Chevron = ({ size = 24, color = "#000" }) => {
  return (
    <Svg
      class="feather feather-chevron-down"
      fill="none"
      height={size}
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Polyline points="6 9 12 15 18 9" />
    </Svg>
  );
};

export default Chevron;
