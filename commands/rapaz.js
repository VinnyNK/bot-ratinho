const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rapaz')
        .setDescription('AUDIO RAPAZ!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO RAPAZ", interaction)

        const player = playerCreate(interaction, "rapaz.mp3");
        connection(player, interaction, "RAPAZ!!!!");
    },
};