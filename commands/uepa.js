const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uepa')
        .setDescription('AUDIO UÊPA!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO UEPA", interaction)

        const player = playerCreate(interaction, "uepa.mp3");
        connection(player, interaction, "UÊPA!!!!");
    },
};