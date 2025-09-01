import Svg, { Path } from "react-native-svg";

const Favorite = ({ color = "#000"}) => {
  return (
    <Svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.417358 24V0H19.084V24L9.75069 20L0.417358 24ZM9.75069 18L1.8209 21.6V1.2H17.4209V21.6L9.75069 18Z"
        fill={color}
      />
    </Svg>
  );
};

export default Favorite;
