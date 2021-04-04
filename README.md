# Set Up
npx create-react-app translation-app

cd translation-app

npm install react@16.8.6 react-dom@16.8.6 konva react-konva

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

## Configuration for model
- F0 is possible -> S0 doesn't incurr too many costs
- Classification
- Multiclass
- General [A2] Domain
