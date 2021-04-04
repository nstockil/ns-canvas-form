// Azure SDK client libraries
import { PredictionAPIClient} from '@azure/cognitiveservices-customvision-prediction';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

// Authentication requirements
const key = process.env.REACT_APP_COMPUTERVISIONKEY;
const endpoint = process.env.REACT_APP_COMPUTERVISIONENDPOINT;
const projectId = "<ProjectId>";
const iterationName = "<Name>";

console.log(`key = ${key}`)
console.log(`endpoint = ${endpoint}`)


export const isCustomVisionConfigured = () => {
    const result = (key && endpoint && (key.length > 0) && (endpoint.length > 0)) ? true : false;
    console.log(`key = ${key}`)
    console.log(`endpoint = ${endpoint}`)
    console.log(`ComputerVision isConfigured = ${result}`)
    return result;
}

// Analyze Image
export const getPrediction = async (image) => {
    const predictor_credentials = new ApiKeyCredentials({ inHeader: { "Prediction-Key": key } });
    const predictor = new PredictionAPIClient( predictor_credentials, endpoint);

    const results = await predictor.classifyImage(projectId, iterationName, image);

    console.log("Results:");
    var tag = '0';
    var highestProb = 0;
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
        if (predictedResult.probability > highestProb)
        {
            highestProb = predictedResult.probability;
            tag = predictedResult.tagName;
        }
    });

    // all information about image
    return tag;
}