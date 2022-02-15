import { useLayoutEffect, useRef, useState } from "react";

export function useRefScrollProgress(inputRef: any) {
  const ref = inputRef || useRef();

  const [start, setStart] = useState<any>(null);
  const [end, setEnd] = useState<any>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.left + scrollTop;

    setStart(offsetTop / document.body.clientWidth);
    setEnd((offsetTop + rect.width) / document.body.clientWidth);
  });

  return { ref, start, end };
}
