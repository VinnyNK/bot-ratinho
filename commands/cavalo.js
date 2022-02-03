const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cavalo')
        .setDescription('AUDIO CAVALO!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO CAVALO", interaction)

        const player = playerCreate(interaction, "cavalo.mp3");
        connection(player, interaction, "CAVALO!!!!");
    },
};