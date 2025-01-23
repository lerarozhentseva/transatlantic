import { useEffect, useMemo, useState } from "react";

export const useOnScreen = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isBelow, setIsBelow] = useState(true);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsBelow(entry.boundingClientRect.y > 0);
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: options.customThreshold || 0.5 }
      ),
    [options.customThreshold]
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref, observer]);

  return [isIntersecting, isBelow];
};
