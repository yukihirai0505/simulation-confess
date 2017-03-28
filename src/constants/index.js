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

export const results = [
  [
    [
      'いざ、君との恋路へ！',
      '巡り会えた時から、魔法が解けない',
      'チョコレートのように甘い恋をしよう。'
    ],
    [

      '恋の始まりに理由はないが、終わりには理由がある。',
      '大人になればなるほど、君はどんどん綺麗になっていった。僕は望遠鏡を手にして星をつかまえに出掛けた',
      '君を手に入れられるなら、単位を失っても良い。'
    ],
    [
      '我輩は好きである。',
      '愛しい君とムカつくあの野郎の関係にバルス！！！！！！！！！！！！',
      '月が綺麗ですね。'
    ]
  ],
  [
    [
      'あなたのシュヴァルツシルト半径に入ってしまいました……',
      '毎朝君の作った和風だし飽和溶液を飲みたいんだ。',
      '僕たちはもう暫近線じゃないんだ！'
    ],
    [
      '君と僕は生まれた時から万有引力という赤い糸によって引かれあっていたんだ',
      '君と円周率のような終わらない恋がしたい。',
      'ファン・デル・ワールス力が感じられるくらいそばにいたい'
    ],
    [
      '君を幸せにするという僕の決意は共有結合よりかたい',
      '僕は理性的な人間のつもりなんだけど\n境界条件次第で簡単にそれは覆ってしまうことに気付いたよ',
      '私とあなたは必要十分条件。'
    ]
  ],
  [
    [
      'あなたを海より深く愛してる',
      'もっと身近な存在になりたいな。返事はどれだけでも待つから',
      '今までいろいろ話してきて好きになった、良ければ付き合って欲しい'
    ],
    [
      '君を見てると放っておけないんだよ',
      'この先ずっとそばにいてくれますか？ Yes or Yes',
      '会ってる時も会えない時も、あなたを幸せにしたい'
    ],
    [
      '一目見た瞬間に君しか見えなかった。壁があったとしても君だけは壁を通して見えた。',
      '僕の人生すべてがこの瞬間で埋め尽くされたなら、と夢見てしまった',
      '僕は君の愛の囚われの身'
    ]
  ]
]

export const ua = (function (u) {
  return {
    Tablet: (u.indexOf("windows") !== -1 && u.indexOf("touch") !== -1 && u.indexOf("tablet pc") === -1)
    || u.indexOf("ipad") !== -1
    || (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1)
    || (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1)
    || u.indexOf("kindle") !== -1
    || u.indexOf("silk") !== -1
    || u.indexOf("playbook") !== -1,
    Mobile: (u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1)
    || u.indexOf("iphone") !== -1
    || u.indexOf("ipod") !== -1
    || (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1)
    || (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1)
    || u.indexOf("blackberry") !== -1
  }
})(window.navigator.userAgent.toLowerCase())