import axios from "axios";
const { success, error } = require('../../utils/response');

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const { data } = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });
        if (data && data.length > 0) {
            res.status(200).json(success(data));
        } else {
            res.status(200).json(success([]));
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(error(err));
    }
}