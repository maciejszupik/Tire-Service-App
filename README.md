This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
App require json server

### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

App require json server

### `npm install -g json-server`
### `json-server --watch -p 3001  src/database/db.json`

Possible problem: 
"json-server : File C:\Users\macie\AppData\Roaming\npm\json-server.ps1 cannot be loaded because running scripts is disabled on this  
system."
If you have such problem with starting json server,
please open powershell command line as an Administrator and type:

"set-executionpolicy remotesigned"
