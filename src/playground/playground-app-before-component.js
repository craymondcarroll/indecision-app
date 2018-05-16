// JSX - JavaScript XML

const app = {
    title: 'Indecision Application',
    subTitle: "Let the System Decide",
    options:[]
}



//--------------------------
//
//
//--------------------------
const onFormSubmit = (e) => {
    e.preventDefault();

    //-e.target points to the element that the even started on.
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};


//--------------------------
//
//
//--------------------------

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const removeOptions = (e) => {
    app.options = [];
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
            {app.subTitle && <p><b>{app.subTitle}</b></p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
};




const appRoot = document.getElementById('app');


renderApp();






