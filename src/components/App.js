import React, {Component} from 'react';
import Header from './Header';
import Choice from './Choice';
import Result from './Result';
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

          <Result />

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
