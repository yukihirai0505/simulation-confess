import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

let choices = [
  {name: 'type', image: 'images/pic01.jpg', position: 'left', icon: 'fa-book', question: '好きな人は？', answer: ['文系', '理系', '草食系']},
  {name: 'favor', image: 'images/pic02.jpg', position: 'right', icon: 'fa-venus-mars', question: 'どちらかというとその人は...', answer: ['S', 'M', 'CRAZY']},
  {name: 'feeling', image: 'images/pic03.jpg', position: 'left', icon: 'fa-pie-chart', question: 'あなたの気持ちは？', answer: ['結婚したい', 'まずはお付き合いから', '遊び']}
];
const SectionInput = React.createClass({
    render: function () {
      let data = this.props.data;
      let radioNodes = data.answer.map(function (answer, index) {
        return (
          <p>
            <input type="radio" name={data.name} value={index}/>{answer}
          </p>
        )
      });
      return (
        <section className={"feature " + data.position}>
          <a href="#" className={"image icon " + data.icon}><img src={data.image} alt=""/></a>
          <div className="content">
            <h3>{data.question}</h3>
            <p>
              {radioNodes}
            </p>
          </div>
        </section>
      );
    }
  })
;

class App extends Component {
  render() {
    let sectionNodes = choices.map(function (choice, index) {
      return (
        <SectionInput data={choice} value={index + 1}/>
      )
    });
    return (
      <div>
        <Header />
        <div id="main">

          <header className="major container 75%">
            <h2>
              下記のチェックリストから<br/>
              好きな人に当てはまるものを<br/>
              チェックしていきましょう。
            </h2>
          </header>

          <div className="box alt container">
            {sectionNodes}
          </div>

          <footer className="major container 75%">
            <h3>告白に必要なもの</h3>
            <p>
              それは少しの勇気と適切な言葉。
            </p>
            <p className="actions">
              <input type="button" className="button" id="confess" value="告白する"/>
            </p>
            <h2>診断結果</h2>
            <p id="result">こちらに結果が表示されます。</p>
            <div id="tweet"/>
            <div id="line"/>
          </footer>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
