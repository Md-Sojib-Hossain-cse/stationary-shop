import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

//main server function
async function main() {
  try {
    //connecting database using uri
    await mongoose.connect(config.database_url as string);

    //listening server
    app.listen(config.port, () => {
      console.log(`Stationary Shop is listening on port ${config.port} 🔥`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
