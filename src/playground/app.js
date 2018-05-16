//--------------------------------------------
//IndecisionApp
//--------------------------------------------
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);


        this.state = {
            options: props.options
        };

    }

    componentDidMount() {

    console.log("Loading data");

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

    handleDeleteOptions() {

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

    handleDeleteOption(optionToRemove) {

        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) =>  optionToRemove !== option)
        }));
    }



    handleAddOption(option) {

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


    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }



    render() {
        const  title = 'Indecision App';
        const  subTitle = "Put your life in the hands of a  computer";

        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}


IndecisionApp.defaultProps = {

    options: []

}


//--------------------------------------------
//Header
//--------------------------------------------


const Header = (props) =>{

    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2> {props.subTitle}</h2>}
        </div>

    );

};

Header.defaultProps = {

    title: 'Sallyport'
};



//--------------------------------------------
//Action
//--------------------------------------------

const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.handlePick}

                disabled={!props.hasOptions}
            >What should I do?

            </button>
        </div>

    );

};


//--------------------------------------------
//Options
//--------------------------------------------

const Options = (props) => {

    return(
        <div>
            <button onClick={props.handleDeleteOptions}> Remove all</button>

            {props.options.length === 0 && <p>Please add an option to get started</p>}


            <ol>
                {
                    props.options.map( (option) => (

                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}

                        />
                    ))
                }
            </ol>


        </div>
    );

};



//--------------------------------------------
//Option
//--------------------------------------------

const Option = (props) => {

    return(
        <li>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </li>
    );
};




//--------------------------------------------
//AddOptions
//--------------------------------------------
class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        };

    }


    handleAddOption(e) {

        e.preventDefault();

        //-e.target points to the element that the even started on.
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);


        //- This is the same as below.
        this.setState( () => ({
            error
        }))


        /*
        this.setState( () =>{

            return {
                error
                // above is identical to error: error
            };

        });
*/

        if(!error) {
           e.target.elements.option.value = '';
        }



    }




    render() {

        return(
            <div>
                {this.state.error && <p> {this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Options</button>
                </form>

            </div>

        );
    }
}




// ReactDOM.render(<IndecisionApp options={['You Know it','Please no']} />,document.getElementById('app'));
ReactDOM.render(<IndecisionApp options={[]} />,document.getElementById('app'));


