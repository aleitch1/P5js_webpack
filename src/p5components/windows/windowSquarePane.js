import { drawAirConditioner } from '../drawAirConditioner';

function drawSquarePaneWindow(config) {
  const {
    p5Sketch,
    storyHeight,
    w,
    x = 10,
    y = 10,
    ac: airConditioners
  } = config;

  const width = w * 2 >= storyHeight - 10 ? 48 : w;
  const numbers = genFramedPanelVal(width, x, y, width * 2);

  const { outer, inner } = numbers;
  p5Sketch.rect(outer.x, outer.y, outer.w, outer.h); // outer
  p5Sketch.rect(inner.x, inner.y, inner.w, inner.h); // outer
  p5Sketch.rect(inner.x, inner.y + inner.h / 2, inner.w, 2);

  if (airConditioners) {
    drawAirConditioner({
      ...config,
      x: inner.x + inner.w / 2,
      y: inner.y,
      windowHeight: inner.h
    });
  }
}

export default drawSquarePaneWindow;
