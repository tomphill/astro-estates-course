import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MobileMenu = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="text-3xl" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {!!open && (
        <div className="fixed top-0 left-0 max-h-screen overflow-auto w-screen bg-event-horizon">
          <div
            className="text-3xl fixed top-4 right-3"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
