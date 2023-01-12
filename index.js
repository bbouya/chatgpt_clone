// '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'

import { Configuration, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization:"org-jOS3rcSS5l2406Nw1OF6NZXw",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
//const reponse = await openai.listEngines()



//need to understand the possibilite that has the moskt 
const { Configuration, OpenAIApi } = require("openai");
//const configuration = new Configuration({
//  apiKey: process.env.OPENAI_API_KEY,
//});
//const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});