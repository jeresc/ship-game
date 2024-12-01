import {AUTO, Game} from "phaser";

import {Boot} from "./scenes/Boot";
import {Game as MainGame} from "./scenes/Game";
import {MainMenu} from "./scenes/MainMenu";
import {Preloader} from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [Boot, Preloader, MainMenu, MainGame],
  physics: {
    default: "arcade",
  },
};

const StartGame = (parent: string) => {
  return new Game({...config, parent});
};

export default StartGame;
