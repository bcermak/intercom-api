const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());

// receiving webhook notification from Intercom to identify admin (MXie) and rating
app.post('/', (req, res) => {

    let authorID = JSON.stringify(req.body.data.item.conversation_rating.teammate.id);
    let conversationID = req.body.data.item.id;
    let rating = req.body.data.item.conversation_rating.rating;

    if (rating == 5) {
      const sdk = require('api')('@intercom-api-reference/v2.9#v67gwo2lhkg10ra');

      sdk.auth('dG9rOmUyMTA4M2Y4XzU4ZWRfNGNkYl9hN2ZiXzFjNzlkNmVkNGNlZDoxOjA=');
      sdk.server('https://api.intercom.io');
      sdk.replyConversation({
        message_type: 'comment',
        type: 'admin',
        body: 'We are so glad to hear you enjoyed your support experience 🤩 <br><br> Would you mind sharing with everone in the app store by <a href="https://resources.smile.io/review"> leaving a quick review? </a>',
        admin_id: '4660381'
      }, {
        id: conversationID,
        'intercom-version': '2.9'
      })
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err));
    } else {
      console.log("Rating is not good")
    }

});


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`))