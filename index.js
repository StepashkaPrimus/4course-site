const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const app = express();
const PORT = 3000;


async function getProjectsFromFile(){
    return JSON.parse(await fs.readFile('./static/portfolio.json', 'utf8'));
}

app.use(cors());

app.get('/projects', async (req, res)=>{
    res.send(await getProjectsFromFile());
})

app.listen(PORT, (error) => {
    if (!error) console.log(`Server is running on http://localhost:${PORT}`)
    else console.log("Error occurred, server can't start", error);
});
