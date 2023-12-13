// path: src/app.js

import express from 'express';
import cors from 'cors';

const app = express();
const port =  3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
