const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus} = require('@discordjs/voice');
const {logger} = require("./logger");

const playerCreate = function (interaction, audioFile) {
    logger("INICIANDO CRIAÇÃO DO PLAYER")
    const player = createAudioPlayer();
    const resource = createAudioResource(`./audios/${audioFile}`);
    player.play(resource);
    logger("PLAYER CRIADO")
    return player;
}

const connection = function (player, interaction, messageReplay) {
    logger("INICIANDO CONEXÃO PARA ENTRAR NO CHANNEL")
    try {
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });

        logger("INSCREVENDO PLAYER NA CONEXÃO");
        connection.subscribe(player)

        logger("RESPONDENDO MENSAGEM")
        interaction.reply(messageReplay)


        player.on(AudioPlayerStatus.Idle, () => {
            logger("DESTRUINDO CONEXÃO APOS FINALIZAR AUDIO")
            connection.destroy();
        })

    }
    catch (e)
    {
        logger("NAO ESTA EM UM CANAL DE AUDIO", interaction)
        interaction.reply("RAAAPAZ!! VC TEM QUE ESTAR EM UMA SALA DE VOZ")
    }
}

module.exports =
{
    playerCreate,
    connection
}