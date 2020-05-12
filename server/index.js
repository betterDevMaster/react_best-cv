const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const request = require('request');
const Linkedin = require('node-linkedin-v2');

const clientId = '8656j4um0k2vvg';
const clientSecret = 'pzWifEGFXtidBQry';
const redirectURI = 'http://localhost:3001/linkedin';
const linkedinClient = new Linkedin(clientId, clientSecret, redirectURI);

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined'));

app.post('/oauth/linkedin/callback', async (req, res, next) => {
  try {
    const { code } = req.body;
    const profile = await linkedinClient.getCurrentMemberProfile(['id', 'firstName', 'lastName'], code);
    const email = await linkedinClient.getCurrentMemberEmail(code);
    const ret = {
      profile,
      email,
    };
    res.send(ret);
  } catch (error) {
    next(error);
  }
});


app.listen(3001, () => {
  console.log('listening on port 3001');
});