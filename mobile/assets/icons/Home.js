import Svg, { Path } from "react-native-svg";

const Home = ({ color = "#000"}) => {
  return (
    <Svg
      width="22"
      height="25"
      viewBox="0 0 22 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.89609 22.3557H7.9193V15.1279H13.9425V22.3557H19.9657V9.10464L10.9978 1.87679L1.89609 9.10464V22.3557ZM0.289886 24.1627V8.10077L10.9978 0.0698242L21.7057 8.10077V24.1627H12.3363V16.1317H9.65933V24.1627H0.289886Z"
        fill={color}
      />
    </Svg>
  );
};

export default Home;
