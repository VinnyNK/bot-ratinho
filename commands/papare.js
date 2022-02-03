const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('papare')
        .setDescription('AUDIO PAPARE!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO PAPARE", interaction)

        const player = playerCreate(interaction, "papare.mp3");
        connection(player, interaction, "PAPAPAPAPARE!!!!");
    },
};