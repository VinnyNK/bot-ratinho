const logger = function (message, interaction) {
    const data = new Date();

    if (interaction === undefined)
    {
        console.log(`[${data.toLocaleString()}] - ${message}`);
    } else {
        console.log(`[${data.toLocaleString()}] - ${interaction.member.user.tag} - ${message}`);
    }
}

module.exports = {
    logger
}