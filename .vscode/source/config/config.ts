import dotenv from 'dotenv';

dotenv.config();

// Create HOSTSERVER and PORT, default to localhost and 1337

const SERVER_HOSTSERVER = process.env.SERVER_HOSTSERVER || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

// Create the server and assign port and host

const SERVER = {
    hostname: SERVER_HOSTSERVER,
    port: SERVER_PORT
};

// Create config object for variable access elsewhere

const config = {
    server: SERVER
};

export default config;
