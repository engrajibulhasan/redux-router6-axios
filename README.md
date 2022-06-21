# Redux with Router6 and AXIOS with Environment (.env)

- Plain Redux
- React Router 6
- Rest call with jsonPlaceholder
- Environment Variable added


## How to add .env
- Atfirst create a .env file in the root folder
- declare a variable like this ```REACT_APP_JSON_PLACEHOLDER_URL="https://jsonplaceholder.typicode.com"```
- Call the variable from any files using ```process.env.REACT_APP_JSON_PLACEHOLDER_URL``` 
*It's very simple*

## How to deploy in Github without .env
- Install ```npm install gh-pages --save-dev```
- Add ```"homepage": "https://engrajibulhasan.github.io/repo-name/",``` on top of the package.json file
- Add two line inside *scripts* in  package.json file
 ```"predeploy": "npm run build",
    "deploy": "gh-pages -d build",```
- ```git add .``` in command
- ```git commit -m"write something" .``` in command
- ```npm run deploy``` in command
-  After that finally ```git push``` 


### redux is easy to use and react router is very simple

