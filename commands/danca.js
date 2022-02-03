const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('danca')
        .setDescription('AUDIO DANÇA GATINHO DANÇA!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO RAPAZ", interaction)

        const player = playerCreate(interaction, "danca.mp3");
        connection(player, interaction, "DANÇA!!!!");
    },
};