import app from './index';

const debug = require('debug')('http');

const port = process.env.PORT || 3002;

app.listen(port, () => {
  debug(`Listening on port ${port}`);
});
