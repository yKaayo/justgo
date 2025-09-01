import React from "react";
import Svg, { Circle, Path, G } from "react-native-svg";

const Profile = ({ size = 32, color = "black", strokeWidth = 2 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <G>
        <Circle
          cx="16"
          cy="16"
          r="15"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <Path
          d="M26,27L26,27c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <Circle
          cx="16"
          cy="11"
          r="6"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </G>
    </Svg>
  );
};

export default Profile;
