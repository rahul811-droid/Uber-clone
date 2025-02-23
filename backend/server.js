
import app from './app.js';
import { createServer } from 'http';

const server = createServer(app);
const PORT = process.env.PORT || 5000;
console.log(PORT)


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});