import Svg, { G, Line } from "react-native-svg";

const Close = ({ size = 32, color = "#000", strokeWidth = 2 }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 32 32"
    >
      <G id="cross">
        <Line
          x1="7"
          y1="7"
          x2="25"
          y2="25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <Line
          x1="7"
          y1="25"
          x2="25"
          y2="7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
};

export default Close;