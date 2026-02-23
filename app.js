const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is to create a continues delivery pipeline! Pileline has been created using AWS CodePipeline and AWS CodeBuild. Manual review stage has been added to the pipeline between build and deploy stages.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
