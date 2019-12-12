# rest-test
This project simulates access to data through web-api, using json-server for mocking, and displaying it in a table.

## How to use
* Copy project to local environment.
* Go to local project dir using terminal/cmd.
* run command: npm install.
* To run json-server, run command: npm run mock:api.
* On another terminal/cmd run npm start.
* In the page appears text-box for address and button to retrieve the data.
* Insert address that fit the api/db.json and fit the OData protocol and click the button to display the data.
```
Type: http:\\localhost:4000\users
Click the button and get all users data.

Type: http:\\localhost:4000\users\2
Click the button and get data for user with id=2.

Type: http:\\localhost:4000\companies?name=Facebook
Click the button and get data for facebook company.
```