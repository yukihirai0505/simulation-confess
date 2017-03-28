import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <span className="logo icon fa-heart"></span>
        <h1>告白ジェネレーター</h1>
        <p>
          あなたには想いを寄せる人はいますか？好きな人はいますか？<br/>
          もしいるならばその想いを伝えましょう。適切な言葉で。
        </p>
      </div>
    );
  }
}

export default Header;