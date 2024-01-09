import React, { Component } from "react";
import Nav from "./components/nav";
import Newsbox from "./components/Newsbox"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // apikey = process.env.REACT_APP_API_KEY;
  // apikey = import.meta.env.REACT_APP_API_KEY;
  apikey = '6667630098d84902b0a920772fc79e48';

  setProgress = (progress) => {
    this.setState({progress:progress});
  }

  state = {
    progress:0
  }
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route path="/" element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"general"} />}/>
            <Route path="/business"element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"business"} />}/>
            <Route path="/entertainment" element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"entertainment"}/>}/>
            <Route path="/health" element={ <Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"health"} />}/>
            <Route path="/sports" element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"sports"} />}/>
            <Route path="/science"element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"science"} />}/>
            <Route path="/technology" element={<Newsbox apikey={this.apikey} setProgress={this.setProgress} pagesize={6} country={"in"} category={"technology"} />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
