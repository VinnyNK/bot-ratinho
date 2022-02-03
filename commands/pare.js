const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pare')
        .setDescription('AUDIO PARE!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO PARE", interaction)

        const player = playerCreate(interaction, "pare.mp3");
        connection(player, interaction, "PARE!!!!");
    },
};