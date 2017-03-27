import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
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

            <section className="feature left">
              <a href="#" className="image icon fa-book"><img src="images/pic01.jpg" alt=""/></a>
              <div className="content">
                <h3>好きな人は？</h3>
                <p>
                  <input type="radio" name="type" value="0" checked="checked"/>文系
                  <input type="radio" name="type" value="1"/>理系
                  <input type="radio" name="type" value="2"/>草食系
                </p>
              </div>
            </section>

            <section className="feature right">
              <a href="#" className="image icon fa-venus-mars"><img src="images/pic02.jpg" alt=""/></a>
              <div className="content">
                <h3>どちらかというとその人は...</h3>
                <p>
                  <input type="radio" name="favor" value="0" checked="checked"/>S
                  <input type="radio" name="favor" value="1"/>M
                  <input type="radio" name="favor" value="2"/>CRAZY
                </p>
              </div>
            </section>

            <section className="feature left">
              <a href="#" className="image icon fa-pie-chart"><img src="images/pic03.jpg" alt=""/></a>
              <div className="content">
                <h3>あなたの気持ちは？</h3>
                <p>
                  <input type="radio" name="feeling" value="0" checked="checked"/>結婚したい
                  <input type="radio" name="feeling" value="1"/>まずはお付き合いから
                  <input type="radio" name="feeling" value="2"/>遊び
                </p>
              </div>
            </section>

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
