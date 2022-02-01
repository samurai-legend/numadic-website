export const IsColliding = ($div1: any, $div2: any, direction: string) => {
  let div1 = $div1.getBoundingClientRect();
  let div1Top = div1.top;
  let div1Left = div1.left;
  let div1Right = div1.right;
  let div1Bottom = div1.bottom;

  let div2 = $div2.getBoundingClientRect();
  let div2Top = div2.top;
  let div2Left = div2.left;
  let div2Right = div2.right;
  let div2Bottom = div2.bottom;

  switch (direction) {
    case "horizontal":
      return (
        (div2Right > div1Left && div2Right < div1Right) ||
        (div2Left < div1Right && div2Left > div1Left)
      );
    case "vertical":
      return (
        (div2Top > div1Top && div2Top < div1Bottom) ||
        (div2Bottom > div1Top && div2Bottom < div1Bottom)
      );
    default:
      return false;
  }
};
