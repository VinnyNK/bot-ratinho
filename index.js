const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus} = require('@discordjs/voice');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const player = createAudioPlayer();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    console.log('oioi')
    if (message.content === "PARE")
    {

        const resource = createAudioResource("./audios/pare.mp3");
        console.log("CRIADO RESOURCE")
        player.play(resource)
        console.log("ADD TO PLAYER")

        try {
            const connection = joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator
            });
            console.log("CRIADO CONNECTION")

            connection.subscribe(player)
            console.log("Bot sent to voice")

            message.reply("RATINHOOOO")
            console.log("SEND RATINHO")


            player.on(AudioPlayerStatus.Idle, () => {
                console.log("audio em idle")
                connection.destroy();
            })

        }
        catch (e)
        {
            console.log("NAO ESTA LOGADO EM NDA")
            message.reply("RAAAPAZ!! VC TEM QUE ESTAR EM UMA SALA DE VOZ")
        }




    }
})

client.login(token);
