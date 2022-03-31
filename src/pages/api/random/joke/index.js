const jokes = require('./data/jokes.json');

const { success, error } = require('../../utils/response');

const getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {        
        const data = await getRandomJoke();    
        if (data) {
            res.status(200).json(data);
        } 
    } catch (err) {
        console.error(err);
        res.status(500).json(error(err));
    }
}