const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());

// receiving webhook notification from Intercom
app.post('/', (req, res) => {
    let data = req.body;
    console.log(data)
});


//reply to conversation via Intercom API
const sdk = require('api')('@intercom-api-reference/v2.9#v67gwo2lhkg10ra');

sdk.auth('dG9rOmUyMTA4M2Y4XzU4ZWRfNGNkYl9hN2ZiXzFjNzlkNmVkNGNlZDoxOjA=');
sdk.server('https://api.intercom.io');
sdk.replyConversation({
  message_type: 'comment',
  type: 'admin',
  body: 'admin name is',
  admin_id: '4660381'
}, {
  id: '27466974880',
  'intercom-version': '2.9'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`))