const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratinho')
        .setDescription('AUDIO RATINHO!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO RATINHO", interaction)

        const player = playerCreate(interaction, "ratinho.mp3");
        connection(player, interaction, "RATINHO!!!!");
    },
};