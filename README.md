## React Indecision Application  ##



- Install Yarn to use instead of NPM
 + npm i -g yarn
 
 - Install ***Live Server** which is a simple no configuration web server
  + ***yarn global add live-server***
  + Type in ***live-server -v***
  + Sometimes ***Yarn*** working with global does not add path information. It may be best to install global packages with ***NPM***
  + If you can see version type in ***npm i -g live-server***
  
- You now can run ***live-server public*** this will watch from changes in the ***public*** folder. The public folder should be off the directory you are running the live-server command

- In the index.html file we will use the ***React Script tag*** for testing, but later one we will use Webpack and other node modules for react
```
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Indecision Application</title>
</head>

<body>
 <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
</body>

</html>

``` 

- Install ***Babel*** Globally along with a couple of presets **Env** and **react**
 + This will allow us to convert all React and ES6/7 code to ES5
 + **yarn global add babel-cli@6.24.1**  (If this fails, like it did for us, use the npm)
 + **npm install -g babel-cli@6.24.1**
 + run **babel -V** and we should see the version

- Now we will install the two presets **env and react** locally
- First we have to **initialize yarn** so it will get track of our dependencies.
 + **yarn init** you will be asked a couple of question and a **package.json** file will be created  
 + **yarn add babel-preset-react@6.24.1 babel-preset-react@1.6.1** but you could get the latest by just typing **yarn add babel-preset-react babel-preset-env** which will get the latest as of the request.
 
- Now we are going to manually run babel to concert **jsx** to normal javascript 
 + babel src/app.js --out-file=public/scripts/app.js --presets=env,react   
 + The above was manually run so it needs to be run again when changes occur
 + We can add the **watch** command to have babel look for changes.
 + babel src/app.js --out-file=public/scripts/app.js --presets=env,react **--watch**


- The below two are the same

```
        this.setState( () => ({
            error
        }))




        this.setState( () =>{

            return {
                error
                // above is identical to error: error
            };

        });

    }

```
 


- Install React **yarn add react**
- Install React Dom **yarn add react-dom**
- Install Babel Core, similar to babel cli. Babel CLI allow you to run babel on the command line while Babel Core allow Webpack to run Babel
 + **yarn add babel-core**
- Now we need to install the **Babel loader** Plugin for Webpack
 + **yarn add babel-loader**
- create .babelrc file with

```
{
  "presets":["env","react"]
}

```

- We are moving off of **live server** and using **webpack dev server** more options and better suited for web pack
 + **yarn add webpack-dev-server**
 
- **Babel** has a plugin that will allow us to not have to bind each method to get access to this and also not adding a constructor just to create class varibles
 + **yarn add babel-plugin-transform-class-properties**
 + We now have to add the plugin to the .babelrc file

 ```markdown
{
  "presets":["env","react"],
  "plugins":["transform-class-properties"]
}
```

- Example of what **transform-class-properties** does for us:

```markdown

class OldSyntax {

   constructor() {
      this.name="raymond";
   }
 
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);



class NewSyntax {
  
name="Andrea"; // Notice there is not variable type, we do not add this  

}

//--- This is the same as using the oldSyntax witout the constructor
const newSyntax = new NewSyntax();
console.log(newSyntax);

```

 
- We can not remove **this.state** from constructor

```markdown

  constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        };

    }

```

```markdown

state = {
  
  error: undefined

};
  constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
      

```


- Example of the **this** binding issue

```markdown

class OldSyntax {
  constructor() {
  
   this.name = "raymond";
  
  getName() {
   return "hello ${this.name}";
  
  }
  

const oldSyntax = new OldSyntax();

console.log(oldSyntax.getName());  // this is work

const Myname = oldSyntax.getName();

console.log(MyName);  // We will get an error here

```


- We now want to use add two css plugins for webpack
 + **yarn add style-loader css-loader** 
- if we wanted just to work with **css** that is all we need just make the following changes in webpack config file

```markdown

 rules: [{
                test:   /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scs$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]

    },

``` 

- We are now going to use **scss** and we have to install a coupld new modules
 + **yarn add sass-loader node-sass*** and add the sass-loader to webpack
 
 
```markdown


 rules: [{
                test:   /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]

    },

``` 


- We want to downlaod normalize.css 
 + **yarn add normalize.css**
- Inmport it into app.js
 + **import 'normalize.css/normalize.css'**
 + change webpack config file to see css files **test: /\.s?css$/**