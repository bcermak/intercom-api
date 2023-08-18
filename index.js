require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());
const sdk = require('api')('@intercom-api-reference/v2.9#v67gwo2lhkg10ra');

// data for all admins to use within API calls
const teamAdmins = [
    {
      name: "Brandon", id: 4660381
    },
    {
      name: "Maggie", id: 1314872
    },
    {
      name: "Jade", id: 5018703
    },
    {
      name: "Lynn", id: 4121991
    },
    {
      name: "Joana", id: 4334203
    },
    {
      name: "Mackenzie", id: 4583295
    },
    {
      name: "Ezra", id: 4656470
    },
    {
      name: "David", id: 5222292
    },
    {
      name: "Andrea", id: 5427534
    },
    {
      name: "Nicole", id: 5430357
    },
    {
      name: "Hannah", id: 5542987
    },
    {
      name: "Lisa", id: 5553917
    },
    {
      name: "Angie", id: 6590114
    }
  ]


// receiving webhook notification from Intercom
app.post('/', (req, res) => {

    let adminID = parseInt(req.body.data.item.conversation_rating.teammate.id);
    let conversationID = req.body.data.item.id;
    let rating = req.body.data.item.conversation_rating.rating;
    
    res.sendStatus(200);

    // match name from the list of admins
    let filtered = teamAdmins.filter((value) => {return value.id === adminID})

    // turn array into object
    let filteredName = {...filtered[0]}
  
    // pull out just the name
    let replyName = filteredName.name

    if (rating == 5) {
      sdk.auth(`${process.env.KEY}`);
      sdk.server('https://api.intercom.io');
      sdk.replyConversation({
        message_type: 'comment',
        type: 'admin',
        body: 'We are so glad to hear you enjoyed your support experience with ' + replyName + ' 🤩 <br><br> Would you mind sharing with everone in the app store by <a href="https://resources.smile.io/review"> leaving a quick review? </a>',
        admin_id: '5216745'
      }, {
        id: conversationID,
        'intercom-version': '2.9'
      })
        .then(() => {
          sdk.manageConversation({
            message_type: 'close',
            type: 'admin',
            admin_id: '5216745'
          }, {id: conversationID, 'intercom-version': '2.9'})
            .then(({ data }) => console.log(data))
            .catch(err => console.error(err));
        })
    } else {
      console.log("Rating is not good")
    }
});


const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`listening on port ${port}...`))