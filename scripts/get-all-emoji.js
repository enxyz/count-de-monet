#!/usr/bin/env node

import { writeFile } from "fs/promises";
import { Parser } from "json2csv";
import { getAllEmojis } from "../src/discord-api.js";

(async () => {
  const emojis = await getAllEmojis();
  const csv = new Parser().parse(emojis);
  const csvPath = "./data/emojis.csv";
  writeFile(csvPath, csv)
    .catch((err) => {
      console.log("Error writing file", err);
    })
    .then(() => {
      console.log("Wrote user stats to", csvPath);
    });
})();
