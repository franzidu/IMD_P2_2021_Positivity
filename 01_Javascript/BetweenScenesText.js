import TextAnimation from "./TextAnimation.js";

export default class BetweenScenesText {
  constructor(textfFont, textSize, textSentence, x, y, textSpeed, stroke) {
    this.textfFont = textfFont;
    this.textSize = textSize;

    this.textSentence = textSentence;
    this.x = x;
    this.y = y;
    this.textSpeed = textSpeed;
    this.stroke = stroke;

    this.sentence = new TextAnimation(
      this.textfFont,
      this.textSize,
      color(0),
      this.textSentence,
      this.x,
      this.y,
      this.textSpeed
    );

    this.fade = 0;
  }

  fadeIn() {
    this.fade += 10;
    if (this.fade > 255) {
      this.fade = 255;
    }
    this.sentence.textColor = color(61, 18, 117, this.fade);
  }

  displayTextBox() {
    push();
    rectMode(CENTER);
    if (this.stroke === true) {
      noFill();
      stroke(61, 18, 117, this.fade);
      strokeWeight(2.5);
    } else {
      fill(255, this.fade);
      noStroke();
    }
    //rectangle expands
    rect(this.x, this.y - 5, 50 + this.sentence.n * 6.9, 40, 2);
    pop();
  }

  displayText() {
    push();
    textAlign(CENTER);
    this.sentence.typeWriter();
    pop();
  }
}
