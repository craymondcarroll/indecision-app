
class VisibleApp extends React.Component {


    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            isVisible: false

        }
    }



    handleToggle() {

        this.setState((prevState) => {

             return {
                 isVisible: !prevState.isVisible
             };

         });
    }




    render() {

        return(
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggle}>{this.state.isVisible?"Hide Details":"Show Details"}</button>

                    {
                        this.state.isVisible && (<p>This is what we want to show</p>)
                    }

                </div>
        );

    }

}


ReactDOM.render(<VisibleApp />, document.getElementById('app'));


/*

const app = {
    title: 'Visibility Toggle',
    isVisible: false
}


const toggleButton = () =>{

    app.isVisible = !app.isVisible;
    renderApp();

};

//--------------------------
//
//
//--------------------------
const renderApp = () => {

    const template = (

        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleButton}>{app.isVisible?"Hide Details":"Show Details"}</button>

            {
                app.isVisible && (<p>This is what we want to show</p>)
            }

        </div>

    );

    ReactDOM.render(template,appRoot);

};


const appRoot = document.getElementById('app');
renderApp();*/
