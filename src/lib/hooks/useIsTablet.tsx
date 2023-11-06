import { useBreakpointValue } from "lib/hooks";

const useIsTablet = () => useBreakpointValue({ base: false, sm: true });

export default useIsTablet;
