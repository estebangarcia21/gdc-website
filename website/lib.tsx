import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";

export const playOnce = (
  config: {
    setState;
    values: any[];
    state: any;
  },
  animation: JSX.Element
) => {
  <Spring
    onRest={() => {
      config.setState({
        ...config.values,
        [config.state]: true,
      });
    }}
  >
    {(props) => <div style={{ ...props }}>{animation}</div>}
  </Spring>;
};
