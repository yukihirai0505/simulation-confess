import React, {Component} from 'react'
import { results, ua } from '../constants/index'
import $ from 'jquery'

class Result extends Component {
  render() {
    return (
      <footer className="major container 75%">
        <h3>告白に必要なもの</h3>
        <p>
          それは少しの勇気と適切な言葉。
        </p>
        <p className="actions">
          <input type="button" className="button" id="confess" value="告白する" onClick={() => {
            function showLink($target, link) {
              $target.fadeOut(1000, function () {
                $target.html(link).fadeIn(1500);
              });
            }
            let $type = $("input[name='type']:checked").val();
            let $favor = $("input[name='favor']:checked").val();
            let $feeling = $("input[name='feeling']:checked").val();
            let result = '「' + results[$type][$favor][$feeling] + '」';
            let $result = $('#result');
            let $tweet = $('#tweet');
            let $line = $('#line');
            let tweetLink = "<a href='https://twitter.com/intent/tweet?text=" + encodeURIComponent(result) + "&hashtags=告白ジェネレーター https://yukihirai0505.github.io/simulation-confess/ @yabaiwebyasan' target='_blank'>ツイートする</a>";
            let lineLink = "<a href='https://line.me/R/msg/text/?" + encodeURIComponent(result) + " https://yukihirai0505.github.io/simulation-confess/' target='_blank'>LINEでシェアする</a>";
            $result.text('').fadeOut(800, function () {
              $result.text(result).fadeIn(800);
            });
            showLink($tweet, tweetLink);
            if (ua.Mobile) {
              showLink($line, lineLink);
            }
          }}/>
        </p>
        <h2>診断結果</h2>
        <p id="result">こちらに結果が表示されます。</p>
        <div id="tweet"/>
        <div id="line"/>
      </footer>
    );
  }
}

export default Result;