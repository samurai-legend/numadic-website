import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactElement;
}

const ExternalPortal: React.FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector("#external_portal") as HTMLElement
      )
    : null;
};

export default ExternalPortal;
