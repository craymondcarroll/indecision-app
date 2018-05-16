import React from "react";

import AddOptions from './AddOptions'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
import Modal from "react-modal";



class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }


    handleClearSelectedOption = () => {
        console.log("close Modal Requested");
        this.setState( () => ({selectedOption: undefined}))
    }


    handleDeleteOptions = () => {

        //---  this is the same as the below this implicitly returns, no need for the word return
        this.setState( () => ({options: []}));

        /*
             this.setState( () => {

                 return {
                     options: []
                 }

             });
        */

    }

    handleDeleteOption = (optionToRemove) => {

        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) =>  optionToRemove !== option)
        }));
    }



    handleAddOption = (option) => {

        if(!option) {
            return "Please enter in a valid option";
        }else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        //---- this is the same as below
        this.setState( (prevState) => ({
            options: prevState.options.concat([option])
        }));



        /*
              this.setState( (prevState) => {

                  return {
                      options: prevState.options.concat([option])
                      // or options: prevState.options.concat(option)
                  }
              });
         */

    }


    handlePick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        console.log(this.state.selectedOption);
        this.setState( () => ({selectedOption: option}))
        console.log(this.state.selectedOption);


    }



    componentDidMount() {

        console.log("Loading data");


        /*
         Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`.
         This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`.
         We have to add below or we will get above error message with react modal appears
         */
        Modal.setAppElement('body');


        try {

            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options}));
            }



        }catch(e) {
            localStorage.removeItem(options);
        }

    }

    componentDidUpdate(prevProps, prevState) {

        console.log("Saving data");
        if( prevState.options.length !== this.state.options.length) {

            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);

        }

    }

    componentWillUnmount() {
        console.log("Component will unmount");

    }



    render() {
        const  title = 'Indecision App';
        const  subTitle = "Put your life in the hands of a computer";

        return(
            <div>
                <Header title={title} subTitle={subTitle}/>

                <div className='container'>
                        <Action
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}

                />
            </div>
        );
    }
}



export default IndecisionApp;