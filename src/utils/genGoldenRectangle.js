import goldenRatioByWidth from './goldenRatioByWidth';

// TODO: this is always too high!
// The window can be no taller than 1/3 the _height_ of a Story!

function genGoldenRectangle(w, x = 10, y = 10) {
  const goldenRectangle = goldenRatioByWidth(w);
  const innerPaneScale = 0.95;
  const paneDiff = (1 - innerPaneScale) / 2;

  const outer = {
    x,
    y,
    w: goldenRectangle.a,
    h: goldenRectangle.c
  };
  const inner = {
    x: (x + goldenRectangle.a) / (2 * paneDiff),
    y: (y + goldenRectangle.c) / (2 * paneDiff),
    w: goldenRectangle.a * innerPaneScale,
    h: goldenRectangle.c * innerPaneScale
  };

  return {
    outer,
    inner
  };
}

export default genGoldenRectangle;
