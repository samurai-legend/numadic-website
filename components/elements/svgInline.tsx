import React, { useEffect, useState } from "react";

const SvgInline: React.FC<any> = ({ url }: any) => {
  const [svg, setSvg] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [url]);

  return (
    <div
      className={`svgInline svgInline--${isLoaded ? "loaded" : "loading"} ${
        isErrored ? "svgInline--errored" : ""
      }`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default SvgInline;
