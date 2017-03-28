import React, {Component} from 'react';
import Header from './Header';
import Choice from './Choice';
import Footer from './Footer';
import {choices} from '../constants/index'

class App extends Component {
  render() {
    let sectionNodes = choices.map(function (choice, index) {
      return (
        <Choice data={choice} value={index + 1}/>
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
