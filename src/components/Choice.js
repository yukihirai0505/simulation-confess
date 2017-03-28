import React, {Component} from 'react';

class Choice extends Component {
  render() {
    let data = this.props.data;
    let radioNodes = data.answer.map(function (answer, index) {
      return (
        <p>
          <input type="radio" name={data.name} value={index}/>{answer}
        </p>
      )
    });
    return (
      <section className={`feature ${data.position}`}>
        <a href="#" className={`image icon ${data.icon}`}><img src={data.image} alt=""/></a>
        <div className="content">
          <h3>{data.question}</h3>
          <p>
            {radioNodes}
          </p>
        </div>
      </section>
    );
  }
}

export default Choice