import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container 75%">
          <ul className="icons">
            <li><a href="https://twitter.com/yuukying" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/yukyhirai" className="icon fa-facebook"><span className="label">Facebook</span></a>
            </li>
            <li><a href="https://github.com/yukihirai0505" className="icon fa-github"><span className="label">Github</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; 告白ジェネレーター</li>
            <li>by Yuki Hirai</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;