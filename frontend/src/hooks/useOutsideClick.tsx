import { useEffect, useRef, ReactNode, RefObject } from "react";

const useOutsideAlerter = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

const OutsideAlerter = ({ children, callback }: { children: ReactNode; callback: () => void }) => {
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, callback);

    return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
