import React, { Component } from "react";
import fontenay from "./fontenay.jpg";
import koh from "./koh.jpg";
import RuPauls from "./RuPauls.jpg";
import "./App.css";
import MissFrance from "./missFrance";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitValueRuPauls: null,
      transitValuefontenay: null,
      transitValuekoh: null,
      nextPage: false,
    };
    this.transiteRuPaul = this.transiteRuPaul.bind(this);
    this.transiteFontenay = this.transiteFontenay.bind(this);
    this.transiteKoh = this.transiteKoh.bind(this);
    this.onClicknext = this.onClicknext.bind(this);
  }

  componentWillMount() {
    this.state.transitValueRuPauls = "imageEntre";
    this.state.transitValuefontenay = "imageEntre";
    this.state.transitValuekoh = "imageEntre";
    this.state.nextPage = false;
  }

  render() {
    return (
      <div className="App-header">
        {console.log(this.state.nextPage)}
        {!this.state.nextPage && (
          <div>
            <img
              onClick={() => this.onClicknext()}
              onMouseEnter={this.transiteRuPaul}
              src={RuPauls}
              className={this.state.transitValueRuPauls}
              alt="RuPauls"
            />
            <img
              onClick={() => this.onClicknext()}
              onMouseEnter={this.transiteFontenay}
              src={fontenay}
              className={this.state.transitValuefontenay}
              alt="fontenay"
            />
            <img
              onClick={() => this.onClicknext()}
              onMouseEnter={this.transiteKoh}
              src={koh}
              className={this.state.transitValuekoh}
              alt="denis"
            />
          </div>
        )}
        {this.state.nextPage && (
          <div>
            {"oui non "}
            <div>
              <MissFrance />
            </div>
          </div>
        )}
      </div>
    );
  }

  transiteRuPaul() {
    this.setState({ transitValueRuPauls: "transit imageEntre" });
    this.setState({ transitValuefontenay: "imageEntre" });
    this.setState({ transitValuekoh: "imageEntre" });
    return;
  }
  transiteFontenay() {
    this.setState({ transitValuefontenay: "transit imageEntre" });
    this.setState({ transitValueRuPauls: "imageEntre" });
    this.setState({ transitValuekoh: "imageEntre" });
    return;
  }
  transiteKoh() {
    this.setState({ transitValuekoh: "transit imageEntre" });
    this.setState({ transitValuefontenay: "imageEntre" });
    this.setState({ transitValueRuPauls: "imageEntre" });
    return;
  }
  onClicknext() {
    this.setState({ nextPage: true });
    console.log("oui click in !");
    return;
  }
}
/*
function onClicknext(props) {
  console.log("oui click out !");
  missFr();
  return;
}
*/
export default App;
