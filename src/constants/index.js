class Choice{
  constructor(name, image, position, icon, question, answer){
    this.name = name
    this.image = image
    this.position = position
    this.icon = icon
    this.question = question
    this.answer = answer
  }
}

export const choices = [
  new Choice('type', 'images/pic01.jpg', 'left', 'fa-book', '好きな人は？', ['文系', '理系', '草食系']),
  new Choice('favor', 'images/pic02.jpg', 'right', 'fa-venus-mars', 'どちらかというとその人は...', ['S', 'M', 'CRAZY']),
  new Choice('feeling', 'images/pic03.jpg', 'left', 'fa-pie-chart', 'あなたの気持ちは？', ['結婚したい', 'まずはお付き合いから', '遊び'])
]