import { MutableRefObject, useEffect } from "react";

interface useOutsideClickProps {
  ref: MutableRefObject<any>;
  extraRef?: MutableRefObject<any>;
  callback: () => void;
  condition?: boolean;
}

export const useOutsideClick = ({
  ref,
  extraRef,
  callback,
  condition = true,
}: useOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let extraCondition = extraRef
        ? !extraRef?.current?.contains(event.target as Node)
        : true;

      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        extraCondition
      ) {
        if (condition) callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, extraRef, callback, condition]);
};
