import {Scene} from "phaser";

import {EventBus} from "../EventBus";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameText: Phaser.GameObjects.Text;
  player: Phaser.Physics.Arcade.Body;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x0f0f0f);
    this.add.graphics();

    // this.background = this.add.image(512, 384, "background");
    // this.background.setAlpha(0.5);

    /*
    this.gameText = this.add
      .text(512, 384, "Make something fun!\nand share it with us:\nsupport@phaser.io", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(100);
    */

    // const player = this.physics.add.sprite(100, 100, "circle");
    //
    // this.player = player;
    //
    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);
    const circle = this.add.ellipse(100, 100, 16, 16, 0xffffff); // x, y, width, height, color

    this.physics.add.existing(circle); // Add physics to the circle
    const player = circle.body as Phaser.Physics.Arcade.Body;

    player.setCircle(8); // Set the hitbox radius (half of width/height)
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.player = player;
  }

  changeScene() {
    this.scene.start("GameOver");
  }

  update() {
    //  Any logic that needs to be checked every frame can go here
    const pointer = this.input.activePointer;

    // Calculate the direction vector from the player to the pointer
    const directionX = pointer.worldX - this.player.x - 8;
    const directionY = pointer.worldY - this.player.y - 8;

    // Scale the velocity to make the movement faster
    const speedMultiplier = 10; // Adjust this value for faster movement

    this.player.setVelocityX(directionX * speedMultiplier);
    this.player.setVelocityY(directionY * speedMultiplier);
  }
}
