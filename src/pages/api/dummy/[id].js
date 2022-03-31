export default async function handler(req, res) {  
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const { id } = req.query || {};
    const data = require(`./data/${id}.json`);
    if (data && data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(error(err));
  }  
}