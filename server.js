const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'jordan walker': {
        'name': 'Jordan Walker',
        'age': 23,
        'team': 'Cardinals',
        'position': 'Outfielder'
    },
    'sal stewart': {
        'name': 'Sal Stewart',
        'age': 22,
        'team': 'Reds',
        'position': 'Infielder'
    },
    'freddie freeman': {
        'name': 'Freddie Freeman',
        'age': 23,
        'team': 'Cardinals',
        'position': 'Outfielder'
    },
    'jose ramirez': {
        'name': 'Jose Ramirez',
        'age': 33,
        'team': 'Indians',
        'position': 'Third Baseman'
    },
    'unknown': {
        'age': 0,
        'team': 'unkown',
        'position': 'unknown'
    }
}
app.get('/', (request, response)=> {
     response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const baseballPlayer = request.params.name.toLowerCase()
    if( players[baseballPlayer] ){
        response.json(players[baseballPlayer])
    }else {
        response.json(players['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}! Better go catch it.`)
})