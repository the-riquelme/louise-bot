const {
  Client, Events, GatewayIntentBits,
} = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Login realizado como ${c.user.tag}`);
});

client.login(TOKEN);
