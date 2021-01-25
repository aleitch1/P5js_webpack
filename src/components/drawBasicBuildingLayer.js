import { getRandomIntInclusive } from './utils';
import { symmetricWindowSeries } from './symmetricSeries';
import { windowDrawFnList } from './windows';

const DEBUG = false;

function drawBasicBuildingLayer(config, sk) {
  const {
    buildingX, y, groundFloor, storyHeight, lowerBoundWindowWidth
  } = config;

  sk.stroke(0, 0, 0);
  sk.noFill();

  // things should be symmetric
  // they can also be multiply-defined
  // fireEscapeLayer(fireW, h, fireX, y, index);

  /* TODO: 
    -- Pass the building layer config directly to building subfunctions
  */
  const symmetricSettings = {
    ...config,
    windowWidth: getRandomIntInclusive(lowerBoundWindowWidth, 64),
    windowDrawFnList,
    x: buildingX,
    y: y + 10 /* - (10 * scaleWeight) */ //   y
  };

  if (!groundFloor) {
    symmetricWindowSeries(symmetricSettings);
  }

  if (DEBUG) {
    // center line
    sk.stroke(0, 124, 69);
    sk.line(buildingX, y, buildingX, storyHeight);
    const c = sk.color(255, 255, 255);
    sk.fill(c);
    sk.stroke(0, 0, 0);
  }
}

export default drawBasicBuildingLayer;
