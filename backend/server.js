const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Success!');
  });
  
  app.get('/upload', (req, res) => {
    console.log('Got file!')
    return res.status(200).json({ result: true, msg: 'GET success!' });
  });

app.post("/upload", (req, res) => {
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 1000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});


app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});