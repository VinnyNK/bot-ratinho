const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('viadao')
        .setDescription('AUDIO VIADÃO BONITO!'),
    execute(interaction) {
        logger("ATIVOU O COMANDO VIDAO", interaction)

        const player = playerCreate(interaction, "viadao.mp3");
        connection(player, interaction, "QUE VIADÃO BONITO!!!!");
    },
};