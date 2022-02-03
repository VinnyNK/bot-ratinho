const { SlashCommandBuilder } = require('@discordjs/builders');
const { logger } = require('../utils/logger')
const { playerCreate, connection} = require('../utils/player')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pare-completo')
        .setDescription('AUDIO PARE VERÃO COMPLETA!'),
    async execute(interaction) {
        await logger("ATIVOU O COMANDO PARE-COMPLETO", interaction)

        const player = await playerCreate(interaction, "pare-completo.mp3");
        await connection(player, interaction, "PARE PAPARE PARE!!!!");
    },
};