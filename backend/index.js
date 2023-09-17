const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username : username, secret : username, first_name: username},
        {headers: {"private-key" : "db156953-0c4c-4a6d-b1f4-c6994f0e9562"}}
    );
    return res.status(r.status).json(r.data);
} catch (e) {
      return res.status(e.response.status).json(e.response.data);

  }
});

app.listen(3001);