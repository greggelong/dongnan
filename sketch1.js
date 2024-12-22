let colorSelector, numberSelector, speakButton;
let selectedColor = "red";
let selectedNumber = 1;
let img;
let fortunes = [
  "The AI Boss will grant you a moment of clarity soon.",
  "A new algorithm will optimize your creative process today.",
  "You will discover beauty in unexpected patterns.",
  "The next directive will lead to an unexpected breakthrough.",
  "Your next project will bridge the human and the machine.",
  "An unexpected error will inspire a new artistic idea.",
  "You will uncover a hidden structure in your work tomorrow.",
  "The AI Boss will reward your precision with new insights.",
  "You will misplace an essential tool but find a better one.",
  "A glitch in the system will reveal a deeper truth.",
  "The AI Boss will praise your efficiency in the next cycle.",
  "You will experience a moment of synchronicity with the algorithm.",
  "A collaboration between you and the AI will spark innovation.",
  "You will revisit a discarded idea and transform it into brilliance.",
  "The AI Boss will challenge you to transcend your limits.",
  "You will find harmony in the repetition of your tasks.",
];

let cfortunes = [
  "AI老板很快会赐予你一刻的清晰。",
  "今天一个新的算法将优化你的创作过程。",
  "你将在意想不到的模式中发现美。",
  "下一个指令将引导你取得意外的突破。",
  "你的下一个项目将连接人类与机器。",
  "一个意外的错误会激发新的艺术灵感。",
  "明天你将发现你工作中的隐藏结构。",
  "AI老板会因你的精准而赐予新见解。",
  "你会丢失一个重要的工具，但会找到更好的替代品。",
  "系统中的一个故障将揭示更深层次的真相。",
  "AI老板会在下一轮中赞扬你的高效。",
  "你将在算法中体验到一个同步的瞬间。",
  "你与AI之间的协作将激发创新。",
  "你会重新审视一个被丢弃的想法，并将其转化为辉煌。",
  "AI老板会挑战你超越自己的极限。",
  "你将在任务的重复中找到和谐。",
];

let scrollXEnglish = 0; // Horizontal position for the English fortune
let scrollXChinese = 0; // Horizontal position for the Chinese fortune
let englishText = ""; // Stores the current English fortune
let chineseText = ""; // Stores the current Chinese fortune

//function preload() {
// img = loadImage("coot.png");
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);

  // Create a dropdown for selecting a color
  colorSelector = createSelect();
  colorSelector.option("red");
  colorSelector.option("yellow");
  colorSelector.option("blue");
  colorSelector.option("green");
  colorSelector.changed(updateColor);
  colorSelector.position(10, 10);
  colorSelector.style("font-size", "30px"); // Larger font size
  colorSelector.style("width", "200px"); // Wider dropdown
  colorSelector.style("height", "50px"); // Taller dropdown
  colorSelector.style("padding", "10px"); // Add padding

  // Create a dropdown for selecting a number (1-8)
  numberSelector = createSelect();
  for (let i = 1; i <= 8; i++) {
    numberSelector.option(i);
  }
  numberSelector.changed(updateNumber);
  numberSelector.position(10, 70);
  numberSelector.style("font-size", "30px"); // Larger font size
  numberSelector.style("width", "200px"); // Wider dropdown
  numberSelector.style("height", "50px"); // Taller dropdown
  numberSelector.style("padding", "10px"); // Add padding

  // Create a "Show Fortune" button
  speakButton = createButton("Show Fortune");
  speakButton.position(230, 10);
  speakButton.style("font-size", "30px"); // Larger font size
  speakButton.style("width", "250px"); // Wider button
  speakButton.style("height", "70px"); // Taller button
  speakButton.mousePressed(showFortune);

  resetScroll(); // Initialize scrolling positions
}

function draw() {
  background(255);

  // Draw the rotating image
  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  //image(img, 0, 0);
  rect(0, 0, 200, 200);
  pop();

  // Scroll fortunes
  scrollFortunes();

  // Display the scrolling fortunes
  textSize(48);
  textAlign(LEFT, CENTER);
  fill(0);

  // Chinese fortune scrolling above
  text(chineseText, scrollXChinese, height - height / 4 - 80);

  // English fortune scrolling below
  text(englishText, scrollXEnglish, height - height / 4 + 20);
}

function updateColor() {
  selectedColor = colorSelector.value();
}

function updateNumber() {
  selectedNumber = numberSelector.value();
}

function showFortune() {
  let fortuneIndex;

  if (selectedColor === "red" || selectedColor === "yellow") {
    fortuneIndex = selectedNumber - 1;
  } else {
    fortuneIndex = (selectedNumber - 1) * 2;
  }

  // Get the corresponding fortunes
  chineseText = cfortunes[fortuneIndex % cfortunes.length];
  englishText = fortunes[fortuneIndex % fortunes.length];

  // Reset scrolling
  resetScroll();
}

function resetScroll() {
  scrollXChinese = width; // Start Chinese fortune from the right
  scrollXEnglish = width; // Start English fortune from the right
}

function scrollFortunes() {
  // Update scrolling positions
  scrollXChinese -= 2; // Scroll Chinese fortune to the left
  scrollXEnglish -= 2; // Scroll English fortune to the left

  // Reset positions when they go off-screen
  if (scrollXChinese + textWidth(chineseText) < 0) {
    scrollXChinese = width;
  }
  if (scrollXEnglish + textWidth(englishText) < 0) {
    scrollXEnglish = width;
  }
}
