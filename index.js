const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());

// data for all admins to use within API calls
const teamAdmins = {
  "type": "admin.list",
  "admins": [
    {
      "type": "admin",
      "email": "bill@smile.io",
      "id": "46571",
      "name": "Bill Curtis",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "mike@smile.io",
      "id": "46962",
      "name": "Mike Rossi",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "katrina@smile.io",
      "id": "1246186",
      "name": "Katrina",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "maggie@smile.io",
      "id": "1314872",
      "name": "Maggie",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "operator+a6zuo3jn@intercom.io",
      "id": "3963564",
      "name": "Smile Assistant",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "tess@smile.io",
      "id": "3982666",
      "name": "Tess",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "lynn@smile.io",
      "id": "4121991",
      "name": "Lynn Penaloza",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "sarahf@smile.io",
      "id": "4122070",
      "name": "Sarah Facini",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "infrastructure@smile.io",
      "id": "4148511",
      "name": "Smile SRE Team",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "systems@smile.io",
      "id": "4172216",
      "name": "Support Team",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "tim@smile.io",
      "id": "4235432",
      "name": "Tim Peckover",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "joana@smile.io",
      "id": "4334203",
      "name": "Joana Jacome",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "mack@smile.io",
      "id": "4583295",
      "name": "Mackenzie",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "ezra@smile.io",
      "id": "4656470",
      "name": "Ezra Alamsyah",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "brandon@smile.io",
      "id": "4660381",
      "name": "Brandon Cermak",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "jade@smile.io",
      "id": "5018703",
      "name": "Jade Davis",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "karen@smile.io",
      "id": "5216745",
      "name": "Karen Fuser",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "david.wyatt@smile.io",
      "id": "5222292",
      "name": "David Wyatt",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "mitchell@smile.io",
      "id": "5391852",
      "name": "Mitchell Curry",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "andreandanafitriah@smile.io",
      "id": "5427534",
      "name": "Andreandana Fitriah",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "nicole.miles@smile.io",
      "id": "5430357",
      "name": "Nicole Miles",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "hannah.scrafton@smile.io",
      "id": "5542987",
      "name": "Hannah Scrafton",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "lisa.gallagher@smile.io",
      "id": "5553917",
      "name": "Lisa Gallagher",
      "away_mode_enabled": true,
      "away_mode_reassign": true,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "social@smile.io",
      "id": "5603938",
      "name": "Smile Marketing Team",
      "away_mode_enabled": true,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "angela.thompson@smile.io",
      "id": "6590114",
      "name": "Angie T",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    },
    {
      "type": "admin",
      "email": "christian.bullock@smile.io",
      "id": "6679008",
      "name": "Christian Bullock",
      "away_mode_enabled": false,
      "away_mode_reassign": false,
      "has_inbox_seat": true,
      "team_ids": [],
      "team_priority_level": {}
    }
  ]
}
// receiving webhook notification from Intercom to identify admin (MXie) and rating
app.post('/', (req, res) => {

    let authorID = JSON.stringify(req.body.data.item.conversation_rating.teammate.id);
    let conversationID = req.body.data.item.id;
    let rating = req.body.data.item.conversation_rating.rating;
    let updatedAt = req.body.data.item.updated_at + 172800;

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
        .then(() => {
  
          sdk.auth('dG9rOmUyMTA4M2Y4XzU4ZWRfNGNkYl9hN2ZiXzFjNzlkNmVkNGNlZDoxOjA=');
          sdk.server('https://api.intercom.io');
          sdk.manageConversation({
            message_type: 'close',
            type: 'admin',
            admin_id: '4660381'
          }, {id: conversationID, 'intercom-version': '2.9'})
            .then(({ data }) => console.log(data))
            .catch(err => console.error(err));
        })
    } else {
      console.log("Rating is not good")
    }

});


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}...`))