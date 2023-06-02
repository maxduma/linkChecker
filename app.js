const express = require('express');
const config = require('config');
const app = express();
const mongoose = require('mongoose');

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000;

async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      })
      app.listen(PORT, () => {console.log(`App has been started on port ${PORT}...`)})

    } catch (e) {
      console.error('Server Error', e.message);
      process.exit(1);
    }
}
start()


