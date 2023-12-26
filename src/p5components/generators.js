import { goldenRatioTallRectangle, getRandomIntInclusive, goldenRatioByWidth } from '../library/utils';


function genVerticalWindowWidths(width) {
  return getRandomIntInclusive(width / 8, width / 3);
}

export {
  genGoldenRectangleWindow,
  genVerticalWindowWidths
};
