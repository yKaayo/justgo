import Svg, { Path, G } from "react-native-svg";

const Time = ({ size = 32, color = "#000" }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <G data-name="Layer 15" id="Layer_15">
        <Path
          fill={color}
          d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"
        />
        <Path
          fill={color}
          d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"
        />
      </G>
    </Svg>
  );
};

export default Time;
