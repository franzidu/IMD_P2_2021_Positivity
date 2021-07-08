import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./weiterButton.js";

export default class EvilMentorToEndBossScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenGIFFadeIn = 0;
    this.firstScreenBool = false;
    this.GIFstopCounter = 0;
    this.firstScreenGIF = loadImage(
      "00_Links/08_evilMentorToEndBossScene/firstScreen.gif"
    );
    this.ground = loadImage("00_Links/00_UI-Elements/ground.png");

    this.firstScreenText = new BetweenScenesText(
      "Duper",
      18.5,
      "Mentor: „Alles klar! Dann bringe ich uns wieder zurück in unsere Dimension.“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToSecondScreen = new WeiterButton(0, 240);

    //Second screen
    this.secondScreenGIFfadeIn = 0;
    this.secondScreenBool = false;
    this.secondScreenGIF = loadImage(
      "00_Links/08_evilMentorToEndBossScene/secondScreen.gif"
    );

    this.secondScreenText = new BetweenScenesText(
      "Duper",
      18.5,
      "Wuuuuushhhh....",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToThirdScreen = new WeiterButton(0, 240);

    //Third screen
    this.thirdScreenImageFadeIn = 0;
    this.thirdScreenBool = false;
    this.thirdScreenImage = loadImage(
      "00_Links/08_evilMentorToEndBossScene/thirdScreen.png"
    );

    this.thirdScreenText = new BetweenScenesText(
      "Duper",
      18.5,
      "Mentor: „Ups... irgendwie hatte mein Dimensionszauber zu viel Magie ausgestoßen...“",
      0,
      20,
      1,
      true
    );

    this.weiterButtonToFourthScreen = new WeiterButton(0, 240);

    //Fourth screen
    this.fourthScreenImageFadeIn = 0;
    this.fourthScreenBool = false;
    this.fourthScreenImage = loadImage(
      "00_Links/08_evilMentorToEndBossScene/fourthScreen.png"
    );

    this.fourthScreenText = new BetweenScenesText(
      "Duper-Bold",
      18.5,
      "...WTF?",
      100,
      -40,
      1,
      false
    );

    this.weiterButtonToFifthScreen = new WeiterButton(440, 240);

    //Fifth screen
    this.fifthScreenImageFadeIn = 0;
    this.fifthScreenBool = false;
    this.fifthScreenImage = loadImage(
      "00_Links/08_evilMentorToEndBossScene/fifthScreen.png"
    );

    this.fifthScreenText = new BetweenScenesText(
      "Duper",
      18.5,
      "...zu viel Magie ausgestoßen?! WAS IST HIER PASSIERT?!",
      -48,
      -240,
      1,
      false
    );

    this.weiterButtonToSixthScreen = new WeiterButton(440, 240);

    //Sixth screen
    this.sixthScreenImageFadeIn = 0;
    this.sixthScreenBool = false;
    this.sixthScreenImage = loadImage(
      "00_Links/08_evilMentorToEndBossScene/sixthScreen.png"
    );

    this.sixthScreenText = new BetweenScenesText(
      "Duper-Bold",
      18.5,
      "Die ganze Welt... ZERSTÖRT?!",
      18,
      0,
      1,
      false
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(440, 240);
    this.showNextPanoramaScreenFromMainSceneBool = false;
  }

  showFirstScreen() {
    this.firstScreenBool = true;
  }

  firstScreen() {
    if (this.firstScreenBool === true) {
      //For fading in the answer pic
      this.firstScreenGIFFadeIn += 5;
      if (this.firstScreenGIFFadeIn > 255) {
        this.firstScreenGIFFadeIn = 255;
      }
      tint(255, this.firstScreenGIFFadeIn);
      image(this.ground, 0, 176, this.ground.width / 2, this.ground.height / 2);
      image(
        this.firstScreenGIF,
        20,
        -30,
        this.firstScreenGIF.width / 2.3,
        this.firstScreenGIF.height / 2.3
      );
      this.firstScreenGIF.delay(100);
      this.GIFstopCounter += 1;
      //7 Sek
      if (this.GIFstopCounter > 210) {
        this.firstScreenGIF.pause();
      }

      //WeiterButton
      this.weiterButtonToSecondScreen.fadeIn();
      this.weiterButtonToSecondScreen.displayActiveOrSleeping();
      this.weiterButtonToSecondScreen.displayButtonSentence();

      this.firstScreenText.fadeIn();
      this.firstScreenText.displayTextBox();
      this.firstScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonSecondScreenClick() {
    if (this.firstScreenBool === true) {
      return this.weiterButtonToSecondScreen.click();
    }
  }

  showSecondScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = true;
  }

  secondScreen() {
    if (this.secondScreenBool === true) {
      this.secondScreenGIFfadeIn += 5;
      if (this.secondScreenGIFfadeIn > 255) {
        this.secondScreenGIFfadeIn = 255;
      }
      tint(255, this.secondScreenGIFfadeIn);
      image(
        this.secondScreenGIF,
        0,
        0,
        this.secondScreenGIF.width,
        this.secondScreenGIF.height
      );
      this.secondScreenGIF.delay(50);

      //WeiterButton
      this.weiterButtonToThirdScreen.fadeIn();
      this.weiterButtonToThirdScreen.displayActiveOrSleeping();
      this.weiterButtonToThirdScreen.displayButtonSentence();

      this.secondScreenText.fadeIn();
      this.secondScreenText.displayTextBox();
      this.secondScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonThirdScreenClick() {
    if (this.secondScreenBool === true) {
      return this.weiterButtonToThirdScreen.click();
    }
  }

  showThirdScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = true;
  }

  thirdScreen() {
    if (this.thirdScreenBool === true) {
      //Mentor is above the text
      this.thirdScreenText.fadeIn();
      this.thirdScreenText.displayTextBox();
      this.thirdScreenText.displayText();

      this.thirdScreenImageFadeIn += 5;
      if (this.thirdScreenImageFadeIn > 255) {
        this.thirdScreenImageFadeIn = 255;
      }
      tint(255, this.thirdScreenImageFadeIn);

      image(
        this.thirdScreenImage,
        10,
        -145,
        this.thirdScreenImage.width / 1,
        this.thirdScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToFourthScreen.fadeIn();
      this.weiterButtonToFourthScreen.displayActiveOrSleeping();
      this.weiterButtonToFourthScreen.displayButtonSentence();
    }
  }

  //for mouseClicked
  weiterButtonFourthScreenClick() {
    if (this.thirdScreenBool === true) {
      return this.weiterButtonToFourthScreen.click();
    }
  }

  showFourthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = true;
  }

  fourthScreen() {
    if (this.fourthScreenBool === true) {
      this.fourthScreenImageFadeIn += 5;
      if (this.fourthScreenImageFadeIn > 255) {
        this.fourthScreenImageFadeIn = 255;
      }
      tint(255, this.fourthScreenImageFadeIn);
      image(
        this.fourthScreenImage,
        0,
        0,
        this.fourthScreenImage.width / 1,
        this.fourthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToFifthScreen.fadeIn();
      this.weiterButtonToFifthScreen.displayActiveOrSleeping();
      this.weiterButtonToFifthScreen.displayButtonSentence();

      this.fourthScreenText.fadeIn();
      this.fourthScreenText.displayTextBox();
      this.fourthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonFifthScreenClick() {
    if (this.fourthScreenBool === true) {
      return this.weiterButtonToFifthScreen.click();
    }
  }

  showFifthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = true;
  }

  fifthScreen() {
    if (this.fifthScreenBool === true) {
      this.fifthScreenImageFadeIn += 5;
      if (this.fifthScreenImageFadeIn > 255) {
        this.fifthScreenImageFadeIn = 255;
      }
      tint(255, this.fifthScreenImageFadeIn);
      image(
        this.fifthScreenImage,
        0,
        0,
        this.fifthScreenImage.width,
        this.fifthScreenImage.height
      );

      //WeiterButton
      this.weiterButtonToSixthScreen.fadeIn();
      this.weiterButtonToSixthScreen.displayActiveOrSleeping();
      this.weiterButtonToSixthScreen.displayButtonSentence();

      this.fifthScreenText.fadeIn();
      this.fifthScreenText.displayTextBox();
      this.fifthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonSixthScreenClick() {
    if (this.fifthScreenBool === true) {
      return this.weiterButtonToSixthScreen.click();
    }
  }

  showSixthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = true;
  }

  sixthScreen() {
    if (this.sixthScreenBool === true) {
      this.sixthScreenImageFadeIn += 5;
      if (this.sixthScreenImageFadeIn > 255) {
        this.sixthScreenImageFadeIn = 255;
      }
      tint(255, this.sixthScreenImageFadeIn);
      image(
        this.sixthScreenImage,
        0,
        0,
        this.sixthScreenImage.width / 1,
        this.sixthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.sixthScreenText.fadeIn();
      this.sixthScreenText.displayTextBox();
      this.sixthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.sixthScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = false;
  }
}
