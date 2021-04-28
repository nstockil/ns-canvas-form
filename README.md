# TODO:
- Complete write up for demo.
- put together slides.

# Custom Vision

# Standing up a Custom Vision Service
Go to the [Custom Vison Portal](https://www.customvision.ai/) and click on the New Project button.

This will open a wizard that will take you through the creation process.

For the Resource it is best to create a new one. This points to an instance of cognitive services that will be used for the demo.  Creating a new one in a unique resouce group will allow for easier clean up after the session today.

The other settings should be set as follows:

Setting | Value
------------ | -------------
Pricing | F0 or S0 if not available
Project Types | Classification
Classification Types | Multiclass
Domains | General [A2] Domain


# React
React is a popular front-end Javascript framework. It uses JSX which combines HTML and Javascript to allow developers component based web apps.

Today we'll be using it to build a prototype translation and learning app.

# Using the React Example
_See the Appendix for more information for setting up a React App from scratch._

## 1. Adding Cognitive Service configurations to the Environment Variables (Windows).
The React App assumes that the Cognitive Services configuration has been stored in your environment variables (System).

The reason the configuration is stored in Environment Variables are for security purposes. It is not safe to store sensitive information in source code. Doing this may lead to exposed secrets. For example commiting and pushing a changes that contain passwords, application keys, secrets to a repository will make that information available to anyone who can access that repository.

However on a shared machine, there is still risk in storing the information in environment variables, as they will be stored as plain text.

Some additional information can be found here:
- [Store application secrets safely during development](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/secure-net-microservices-web-applications/developer-app-secrets-storage)

- [How to use Environment Variables keep your secret keys safe & secure!](https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c)

To add the configurations to environment variabled, the following commands can be used in the cmd prompt:

```
set REACT_APP_COMPUTERVISIONKEY="cognitive services key"
set REACT_APP_COMPUTERVISIONENDPOINT="cognitive services endpoint"
```
Once the variables have been added, you will need to restart the instance of VS Code that is running to ensure the changes will be made available.  When updating Environment variables you always need to refresh any open prompts or applications that are running to reload the variables.

You can also check if the vaiables are available through node by running the following commands in the cmd prompt:
```
node -e 'console.log(process.env.REACT_APP_COMPUTERVISIONKEY)'
node -e 'console.log(process.env.REACT_APP_COMPUTERVISIONENDPOINT)'
```
## 2. Clone the demo project
Clone the demo project down using the command line:
```
git clone https://github.com/nstockil/translationappprototype.git
```

When the code is downloaded, you can open it up in Visual Studio code.  Expand the file explorer and you will see the structure of the application.

Most of the code you work with lives in the src folder. This is where you will see the main application (App.js), and the components used in the app. In this applciation we have 2 components and a helper class. Another important file is package.json. This describes the dependencies your project has.

If you look in App.js you will see that we use components with JSX. This means we can use HTML like syntax to insert components. In this case we are using the ```Translator``` component.

The ```Translator``` component contains a method called ```render```. This is an important method in a component as it defines how the component is presented to the user of the app. In this case we can see it will display another component called ```Canvas```, some button and a text area. We can also see however it will only show that if we can confirm cognitive services is configured on your machine. Otherwise it will show a warning message.

```Translator``` also has a constructor where we have configured some event handlers for the buttons, and configures the state for the app.

EXPLAIN WHAT STATE IN REACT IS HERE.

If we look at the ```Canvas``` component next, what we see is that this creates a canvas to display to the user of the app.  It also contains the logic we require to draw on the canvas.  The canvas in this app is created used a package from npm called Konava.

EXPLAIN KONVA.

The component also has two buttons to work with the canvas. One to clear the canvas, and the other to trigger the translation process.  When translation is called, we export the image from the canvas, and send it to Cognitive Services for processing. To work with Cognitive Services we are using Microsoft Azure packages from npm.

This brings us to the last part of the application we're going to look at before starting to work with the app - azure-cognitiveservices-computervision.js.

This contains all the logic we need to work cognitive services.  We need to make an update here to specify the name of the project you created earlier, and the iteration of the project.  These will be used by the application to connect to Custom Vision.

Note there are also variables here for the endpoint and key for the Cognitive Services instance you set up earlier. These are getting pulled from the environment variables that were set up earlier.

## 3. Running and Using the Application
Now that we understand what the application is doing, we'll run it!

Open the terminal in Visual Studio code and navigate to translation-app folder. This is the root of our application.

```
cd .\translation-app\
```

We then need to install the dependencies of the application. This is done by running the following command.

```
COMMAND TO INSTALL PACKAGES
```

This command reads the package.json file, mentioned earlier and installs the packages listed within it. This can take a few moments.

Once this has completed, the application can be run using the following command:
```
npm start
```
This will build and deploy the application locally.  It may lauch your web browser for you. If it does not, it will print out the url for your application.

It will likely be http://localhost:3000/ or similar.

If any of the steps do not work, make sure that node is on your PATH environment variable and that the endpoint and key have been added to your Environment variables.

Anytime you modify Environment Variables, you should restart any application using them.

Once all debugged, you should be able to start using the application!

# Appendix
## How to set up a React app from Scratch
With Node.js installed, it is possible to generate a basic React app with the below command. This basic app is useful to stand up all the scaffolding needed to build apps.
```
npx create-react-app translation-app
cd translation-app
```

Once the app is set you, you can run the app with:

```
npm start
```

This should launch the app once deployed.  Otherwise at the end of deployment you will be presented with the url. Likely localhost:3000 or similar.

For the demo project we used, the following packages were installed using the npm (Node Package Manager).  This was done with the command below. Note that you can install multiple packages at once, and you can specify the version of the package to install.
```
npm install react@16.8.6 react-dom@16.8.6 konva react-konva @azure/
cognitiveservices-customvision-prediction
```

This is a very small taster of React. If interested in learning more, there is a Microsoft Learn course available on it. [Creating your first web apps with React](https://docs.microsoft.com/en-us/learn/paths/react/)

# Custom Vision Information

## Custom Vision Documentation
- https://docs.microsoft.com/en-us/javascript/api/@azure/cognitiveservices-customvision-prediction/?view=azure-node-latest
- https://docs.microsoft.com/en-us/azure/cognitive-services/Custom-Vision-Service/quickstarts/image-classification?tabs=visual-studio&pivots=programming-language-javascript#authenticate-the-client
- https://southcentralus.dev.cognitive.microsoft.com/docs/services/Custom_Vision_Prediction_3.1/operations/5eb37d24548b571998fde5f3
- https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/static-web-app/introduction

