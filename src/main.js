/* eslint-disable no-param-reassign */
import * as P5 from './vendor/p5.min';

// P5 Dependencies
import genBuildingInfo from './p5components/genBuildingInfo';
import genBuildingLevel from './p5components/genBuildingLevel';
import fireEscapeGen from './p5components/genFireEscape';
import drawBasicBuildingLayer from './p5components/drawBasicBuildingLayer';

function logger(str) {
  console.log(str);
}
logger('Loaded bundle.js');

const DEBUG = false;
const y = 100; // animated line

const canvas = [1280, 940];
const pageMargin = 10; // center the building

const buildingConfig = {
  canvas,
  pageMargin,
  minStories: 6,
  maxStories: 8,
  pi: 3.14159,
  buildingWidth: 470,
  lowerBoundWindowWidth: 48,
  upperBoundWindowWidth: 64,
  numberOfBuildings: 1,
  buildingIndex: 0
};

/*
  GIANT REMINDER TO SELF:
  Processing _is not_ for application development!!
  Processing programatically draws pretty pictures, and has a very poor repaint model!!!!
  Use it to make pretty things that are basically unhinged visualizations!!!!!
*/

const s = (p5Sketch) => {
  p5Sketch.setup = () => {
    const canvasObj = p5Sketch.createCanvas(...canvas);
    canvasObj.parent('canvasHolder');
    p5Sketch.frameRate(0.25);
  };

  p5Sketch.draw = () => { // "Draw" updates every tick, on the java model of canvas animation
    p5Sketch.background(255); // Set the background to black
    p5Sketch.noFill();

    // const testStory = storyArray[0];
    // logger(testStory);
    // sk.rect(testStory.buildingOrigin[0], 10, 470, 960); // draw building?
    // sk.rect(margin, 0, buildingWidth, canvas[1]);

    // you can only _draw_ things inside this, but we can do number generation pre-this.
    // We need to pass in the instantiated SK context.
    const genBuilding = genBuildingInfo(buildingConfig);
    const storyArray = genBuildingLevel(genBuilding);

    storyArray.forEach((story, i) => {
      drawBasicBuildingLayer({
        p5Sketch,
        ...story,
        currentStory: i
      });
      // debugger;
      fireEscapeGen({ ...story, index: i, p5Sketch });
      /*
        Here we pass the sketch object on every config
        This is annoying and might be better handled with a state manager
       */
    });
  };
};

const p5 = new P5(s);
