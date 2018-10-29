import express from 'express';
import path from 'path';
import fallback from 'express-history-api-fallback';

const app = express();
const port = process.env.PORT || 8500;

app.use(express.static(path.join(__dirname, '../../dist')))
app.use(fallback(path.join(__dirname, '../../dist')))

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../dist'))
);

app.listen(port, () => console.log('Server running'));
