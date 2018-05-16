console.log('App.js is running');

// JSX - JavaScript XML


const user = {
    name: "Raymond",
    age: 19,
    location: "Washington DC"
}


const app = {
    title: 'Indecision Application',
    subTitle: "Let the System Decide",
    options:['One','Two']
}



const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p><b>{app.subTitle}</b></p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);



const template2 = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
        {getLocation(user.location)}

    </div>
);



//------------------------------------
//
//------------------------------------

function getLocation(location) {

    if(location) {
        return <p>Location: {user.location}</p>;
    }

}



var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);