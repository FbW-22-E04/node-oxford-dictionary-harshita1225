import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const options = {
  headers: {
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY,
  },
};

const url =
  "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/" +
  process.argv[2];
const response = await axios.get(url, options);

console.log(response.data.results[0].lexicalEntries[0].entries[0].senses);
response.data.results[0].lexicalEntries[0].entries[0].senses.forEach(
  (item, idx) => console.log(`${idx + 1}:${item.definitions[0]}`)
);
