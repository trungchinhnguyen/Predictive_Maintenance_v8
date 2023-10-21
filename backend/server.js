// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());


// app.get('/', (req, res) => {
//     res.send('Success!');
//   });
  
//   app.get('/upload', (req, res) => {
//     console.log('Got file!')
//     return res.status(200).json({ result: true, msg: 'GET success!' });
//   });

// app.post("/upload", (req, res) => {
//     setTimeout(() => {
//         console.log('file uploaded')
//         return res.status(200).json({ result: true, msg: 'file uploaded' });
//     }, 1000);
// });

// app.delete("/upload", (req, res) => {
//     console.log(`File deleted`)
//     return res.status(200).json({ result: true, msg: 'file deleted' });
// });


// app.listen(8080, () => {
//     console.log(`Server running on port 8080`)
// });



// const http = require('http')


const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors');



const app = express()
const port = process.env.PORT || 10000

// const server=http.createServer(app)


// const buildPath = path.join(__dirname, 'build')

buildPath = path.join('./', 'build')




app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())


// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})


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


// Showing that the server is online and running and listening for changes
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})

// app.listen(port, hostname:'http://Predictive_Maintenance_v20/' () => {
//     console.log(`Server is online on port: ${port}`)
//   })