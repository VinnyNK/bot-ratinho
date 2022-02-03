const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const { logger } = require('./utils/logger')
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
    logger("CONECTADO COM SUCESSO")
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    logger("####INICIO COMANDO####")
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        logger(error);
        interaction.reply("UÊPA!!! ESTAMOS COM PROBLEMAS PARA EXECUTAR O COMANDO");
    }
});

client.login(token);
