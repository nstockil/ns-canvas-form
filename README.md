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
<INSERT GIT COMMANDS HERE>
```
ADD OVERVIEW OF THE APPLICATION AND HOW IT WORKS HERE.

## 3. Running and Using the Application

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

# Custom Vision Information

## Custom Vision Documentation
- https://docs.microsoft.com/en-us/javascript/api/@azure/cognitiveservices-customvision-prediction/?view=azure-node-latest
- https://docs.microsoft.com/en-us/azure/cognitive-services/Custom-Vision-Service/quickstarts/image-classification?tabs=visual-studio&pivots=programming-language-javascript#authenticate-the-client
- https://southcentralus.dev.cognitive.microsoft.com/docs/services/Custom_Vision_Prediction_3.1/operations/5eb37d24548b571998fde5f3
- https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/static-web-app/introduction

