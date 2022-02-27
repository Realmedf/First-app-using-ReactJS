import React from "react";
import './App.css'
import Header from "../Header/Header";
import Result from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {




    state = {

        headertext: "Name It!",
        headerexpanded: true,
        textsuggested: [],

    }

    handleInputChange = (inputtext) => {
        this.setState({
            headerexpanded: inputtext ? false : true,
            textsuggested: inputtext ? name(inputtext) : [],
        })

    }


    render() {
        return (
            <div>
                <Header
                    headerexpanded={this.state.headerexpanded}
                    headtitle={this.state.headertext} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <Result textsuggested={this.state.textsuggested} />
            </div>
        );
    }

}



export default App
