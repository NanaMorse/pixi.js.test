import * as PIXI from 'pixi.js'

/** generate stage start */

// generate renderer
const renderer = PIXI.autoDetectRenderer(512, 512);

// add renderer to the html document
document.body.appendChild(renderer.view);

// create a container called the 'stage'
const stage = new PIXI.Container();

renderer.backgroundColor = 0xFFFFFF;

/** generate stage end */

/** display sprite start */

const superMarioPixelPngUrl = 'src/images/Super-Mario-Pixel.png';

// load image to texture
PIXI.loader.add(superMarioPixelPngUrl).load(() => {
  // generate sprite
  const sprite = new PIXI.Sprite(PIXI.loader.resources[superMarioPixelPngUrl].texture);

  stage.addChild(sprite);

  // render the stage
  renderer.render(stage);
});

