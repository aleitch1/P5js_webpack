import { getRandomIntInclusive, isEven } from './utils';
import { verticalPaneDef } from './windows';

/*
    numberOfWindows: numberOfWindows,
    windowType: windowStyle,
    buildingOrigin: buildingX,
    buildingWidth: buildingWidth
*/

function symmetricWindowSeries(config, sk) {
  const {
    numberOfWindows, buildingWidth, windowType, windowWidth, y, buildingX
  } = config;

  const ac = getRandomIntInclusive(0, numberOfWindows);
  const acCount = 0;

  // const panelsInWindows = getRandomIntInclusive(1, 3);
  const panelsInWindows = 1;
  const pairs = (!isEven(numberOfWindows))
    ? (numberOfWindows - 1) / 2
    : numberOfWindows / 2;

  if (!isEven(numberOfWindows)) {
    const centerLine = buildingX + buildingWidth / 2;

    const centeredX = (buildingX + buildingWidth / 2) - windowWidth / 2;
    verticalPaneDef(panelsInWindows, windowType, centeredX, y, windowWidth, ac);

    for (let i = 0; i < pairs; i += 1) {
      const interval = buildingWidth / numberOfWindows;

      const x1 = (centerLine - buildingWidth / 2 + (interval * i + 1)) + ((interval - windowWidth) / 2);
      const x2 = (centerLine + (interval * i) + (interval - (windowWidth / 2)));
      const xL = x1;
      const xR = x2;

      verticalPaneDef(panelsInWindows, windowType, xL, y, windowWidth, ac);
      verticalPaneDef(panelsInWindows, windowType, xR, y, windowWidth, ac);
    }
  } else {
    /* DEBUG: Symmetric pairs are working fine! */
    for (let i = 0; i < pairs; i += 1) {
      // in non-centered symmetric pairs, elements should
      // elements should space themselves evenly across the width of the building
      const centerLine = buildingX + buildingWidth / 2;
      const interval = buildingWidth / numberOfWindows;
      const centerPane = ((interval - windowWidth) / 2);

      const arrangementOptions = [
        {
          name: 'symmetric',
          x1: (centerLine - buildingWidth / 2 + (interval * i + 1)) + ((interval - windowWidth) / 2),
          x2: (centerLine + (interval * i) + centerPane)
        }
      ];

      const arO = arrangementOptions;
      const { x1, x2 } = arO[getRandomIntInclusive(0, arO.length - 1)];

      verticalPaneDef(panelsInWindows, windowType, x1, y, windowWidth, ac);
      verticalPaneDef(panelsInWindows, windowType, x2, y, windowWidth, ac);
    }
  }
}

export { symmetricWindowSeries };