#!/usr/bin/env node

import 'dotenv/config'
import { getGuildMember } from "../src/discord-api.js";

const searchName = "0xBrunoF#6909"; // TODO: make arg

const main = async () => {
    const users = await getGuildMember(searchName);
    console.log(users);
}

main();