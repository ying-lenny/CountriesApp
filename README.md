# CountriesApp
 
A JavaScript application made using React for the frontend, and Node and Express for the backend created by Owen Lenihan using the [REST Countries API](https://restcountries.com/#endpoints-name).

## Live Links
- Frontend: https://ying-lenny.github.io/CountriesApp/
- Backend: https://countriesapp-ggwg.onrender.com/

The frontend is hosted using GitHub Pages and the backend is hosted on Vercel

The backend will have to be loaded before the search functionality on the frontend works as it is being hosted on Vercel with aggresively puts unused apps to sleep so please be sure to load it and wait for confetti to appear before searching. 

## Running Locally
To run locally after downloading the application

Both the backend and frontend need to be opened in a code editor such as Visual Studio Code's intergrated terminal separately and run the following command.

`npm install` 

When done and the installations were successful, using the following command in both terminals again with launch them on your local network.

`npm run start`

After some time, both the frontend and backend will launch, however one tweak to make it work entirely locally is to change the API call in the frontend's API folder > backend.js and change the fetch method to localhost instead of the live backend.

Thank you for your time and reading this far,

Owen Lenihan