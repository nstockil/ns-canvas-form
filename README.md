# Set Up
npx create-react-app translation-app

cd translation-app

npm install react@16.8.6 react-dom@16.8.6 konva react-konva @azure/cognitiveservices-customvision-prediction

npm start

# TODO:
- Make letter images non transparent
- create test model
- call prediction from app

# Custom Vision Information
Portal: https://www.customvision.ai/

## Custom Vision Documentation
- https://docs.microsoft.com/en-us/javascript/api/@azure/cognitiveservices-customvision-prediction/?view=azure-node-latest
- https://docs.microsoft.com/en-us/azure/cognitive-services/Custom-Vision-Service/quickstarts/image-classification?tabs=visual-studio&pivots=programming-language-javascript#authenticate-the-client
- https://southcentralus.dev.cognitive.microsoft.com/docs/services/Custom_Vision_Prediction_3.1/operations/5eb37d24548b571998fde5f3
- https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/static-web-app/introduction

## Configuration for model
- F0 is possible -> S0 doesn't incurr too many costs
- Classification
- Multiclass
- General [A2] Domain

## Path Configuration
Two commands are needed to run this locally.  Once the Azure Cognitive services are set up get the endpoint and key information and add to your path.

set REACT_APP_COMPUTERVISIONKEY="REPLACE-WITH-YOUR-KEY"

set REACT_APP_COMPUTERVISIONENDPOINT="REPLACE-WITH-YOUR-ENDPOINT"



set REACT_APP_COMPUTERVISIONKEY="41367de3e3014547818d6fc7df1a374f"
set REACT_APP_COMPUTERVISIONENDPOINT="https://southcentralus.api.cognitive.microsoft.com/"