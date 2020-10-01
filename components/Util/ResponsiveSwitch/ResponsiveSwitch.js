import { useWindowSize } from "../../../lib/useWindowSize"
import { breakpoints } from "../../styles/theme"

export const ResponsiveSwitch = ({ desktopComponent, mobileComponent, breakpointIndex }) => {
    const [width, height] = useWindowSize();
    return (
        <>
            {width >= parseInt(breakpoints[breakpointIndex]) ? (desktopComponent) : (mobileComponent)}
        </>
    );
}