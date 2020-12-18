import React, { Component } from "react";
import fontenay from "./fontenay.jpg";
import koh from "./koh.jpg";
import RuPauls from "./RuPauls.jpg";
import "./App.css";
import MissFrance from "./missFrance";
import Carte from "./Carte";
import firebase from "firebase";
import config from "./configDDB";
import 'reactjs-popup/dist/index.css';
import configBddNote from "./configBddNote";

class App extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  else {
    firebase.app();
 }
    this.state = {
      transitValueRuPauls: null,
      transitValuefontenay: null,
      transitValuekoh: null,
      nextPage: -1,
      note:null,
      re:null,
      load:false,
      login:false,
      id:null,
      mdp:null,
      loginMdp:null,
      loginId:null,
      etatId:null,
      loadNote:null,
      loadNoteBolean:false
    };
    this.transiteRuPaul = this.transiteRuPaul.bind(this);
    this.transiteFontenay = this.transiteFontenay.bind(this);
    this.transiteKoh = this.transiteKoh.bind(this);
    this.onClicknext = this.onClicknext.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeMdp = this.handleChangeMdp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.checkLoginExiste = this.checkLoginExiste.bind(this);
    this.loadBdd = this.loadBdd.bind(this);
    
  }

  componentWillMount() {
    this.state.transitValueRuPauls = "imageEntre";
    this.state.transitValuefontenay = "imageEntre";
    this.state.transitValuekoh = "imageEntre";

    const loginIdMdp = firebase.database().ref("login");
    loginIdMdp.on('value', snapshot => {
      this.setState({
        loginId: snapshot.val(),
        load:true
      })
    })
    const note = firebase.database().ref("note");
    note.on('value', snapshot => {
      this.setState({
        loadNote: snapshot.val(),
        loadNoteBolean:true
      })
    })
  }
  handleChangeId(event) {
      this.setState({id: event.target.value});  
      }

  handleChangeMdp(event) {
      this.setState({mdp: event.target.value});  
  }    

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.id);
    event.preventDefault();
  }
  render() {

    return (
      <div className="App-header">

        {this.state.load == true && this.state.loadNoteBolean && this.state.nextPage==-1 &&(
        <div className= "containerbis">   
          <div className= "login">
            <div className = "UserMdp titreId">
              Id : <input id="username" type="text" name="username" value={this.state.id} onChange={this.handleChangeId}></input>
              Mot de passe :<input id="username" type="password" name="username" value={this.state.mdp} onChange={this.handleChangeMdp}></input>
            </div>
            <div className = "Boutton">
              <button className = "button" onClick = {() => this.checkLogin(this.state.id,this.state.mdp) }> Login </button>
              <button className = "button2"
              onClick = {() => this.checkLoginExiste(this.state.id) }> Creer </button>
            </div>
          {this.state.etatId}
          </div>
        </div>
        )}
       
        {this.state.nextPage == 0 && this.state.login == true && (
          <div>
            <img
              onClick={() => this.onClicknext(this.state.nextPage)}
              onMouseEnter={this.transiteRuPaul}
              src={RuPauls}
              className={this.state.transitValueRuPauls}
              alt="RuPauls"
            />
            <img
              onClick={() => this.onClicknext(this.state.nextPage)}
              onMouseEnter={this.transiteFontenay}
              src={fontenay}
              className={this.state.transitValuefontenay}
              alt="fontenay"
            />
            <img
              onClick={() => this.onClicknext(this.state.nextPage)}
              onMouseEnter={this.transiteKoh}
              src={koh}
              className={this.state.transitValuekoh}
              alt="denis"
            />
          </div>
        )}
        {this.state.nextPage==1 && 
        <div className="fullScreen container" onClick={() => this.onClicknext(this.state.nextPage)}>
          <MissFrance 
        />
        </div>}
        {this.state.nextPage >=2 && 
        <div className="fullScreen container" onClick={() => this.onClicknext(this.state.nextPage)}>
          {console.log("lod", this.state.loadNote[this.state.id])}
          {console.log("lod", this.state.id)}
          <Carte lesNote={this.state.loadNote[this.state.id]} 
          id={this.state.id}
        />
       
        </div>
        }
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
  onClicknext(value) {
    this.setState({ nextPage: value + 1  });
    return;
  }

  checkLogin(id, mdp)
  {
    if(this.state.loginId[id] != null)
    {
        if(this.state.loginId[id]==mdp)
        {
            this.setState({
              etatId: "Id Ok !",
              nextPage: 0,
            });
            this.getBdd(id)
        }
        else
          {
            this.setState({
              etatId: "Tu t'es trompé(e) ! mais l'id est Ok!",
            });
          }
    }
    else
    {
      this.setState({
        etatId: "Tout es Faux ! Zéro ! T'es mauvais !",
      });    
    }
  }


  checkLoginExiste(id)
  {
    if(this.state.loginId != null)
    {
        if(this.state.loginId[id]!=null)
        {
            this.setState({
              etatId: "Cet Id est déjà pris !",
            });
        }
        else
          {
            firebase.database().ref("login/"+this.state.id).set(this.state.mdp)
            this.setState({
              nextPage: 0,
              etatId: "C'est noté !",
            });
          }
    }
    else
    {
      firebase.database().ref("login/"+this.state.id).set(this.state.mdp)
      this.setState({
        nextPage: 0,
        etatId: "C'est noté !",
      });    
    }
    this.loadBdd(id)
  }
  loadBdd(id)
  {
    if(this.state.loadNote != null)
    {
      firebase.database().ref("note/"+id).set("id")
      firebase.database().ref("note/"+id).set(configBddNote)
    }
    this.setState({
      login:true,
    }); 
  }
  getBdd(id)
  {
    this.setState({
      nextPage: 0,
      login:true,
    }); 
  }
}

export default App;
