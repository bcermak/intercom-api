// const Intercom = require('intercom-client')
// const client = new Intercom.Client({  tokenAuth: {token:'dG9rOmQ1MzBhZjAwXzY2MGZfNGI3N19hNmVhXzJmOWM3Yjc1NzZkODoxOjA='} });

// client.useRequestOpts({
//     headers: {
//         'Intercom-Version': 2.9
//     }
// });

// const user = await client.contacts.createUser({
//     name: 'Brandon Cermak',
//     email: 'b.cermak@outlook.com',
//     custom_attributes: {
//         isScholar: 'true'
//     }
// });

const sdk = require('api')('@intercom-api-reference/v2.9#v67gwo2lhkg10ra');

sdk.auth('dG9rOmQ1MzBhZjAwXzY2MGZfNGI3N19hNmVhXzJmOWM3Yjc1NzZkODoxOjA=');
sdk.createContact({
  email: 'b.cermak@outlook.com',
  name: 'Brandon Cermak'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));