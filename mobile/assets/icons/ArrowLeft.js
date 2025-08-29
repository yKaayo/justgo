import Svg, { Path } from "react-native-svg";

const ArrowLeft = ({ size = 24, color = "white" }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z"
        fill={color}
      />
      <Path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" fill={color} />
    </Svg>
  );
};

export default ArrowLeft;
