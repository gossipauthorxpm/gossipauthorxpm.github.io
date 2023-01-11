import '../css/style.css';
import React from 'react';
import Header from "./Header";
import Content from "./Content";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      language: this.getUserLang()
    }
  }
  render() {
    return <main>
      <Header langChange={this.langChange}/>
      <Content language={this.state.language}/>
    </main>
  }

  langChange = (lang) => {
    this.setState({language: lang})
  }
  getUserLang(){
    return window.navigator.language.substring(0,2).toLowerCase()
  }

}

export default App;
