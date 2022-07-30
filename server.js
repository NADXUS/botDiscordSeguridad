const { Client, Intents } = require('discord.js');


const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
discordClient.login('OTg4NjU2MjExNTQ3MjkxNzU4.G0dc3e.T8gN_rHbCtcsC-IWQPJnShWdkgnFfKWDbBXfYM')

discordClient.on('ready', () => {
    console.log("Se ha recivido un mensaje");
})



const expresionsCommands = {
    carcelREGEX: /^##carcel [<][@]\d*[>]/g,
    usuarioREGEX: /[<][@]\d*[>]/g,
    numbersREGEX: /(\d+)/g,
    rolesPermitidos: ['ADMINISTRADORES', 'Fundadores', 'MODERADORES'],
    roles: [{
        title: 'Preso',
        key: '988647470156369990'
    }]
}
discordClient.on('message', (message) => {
    if (message.content) {
        if (message.content.startsWith("##carcel")) {

            if (
                message.member.roles.cache.some(role => role.name === expresionsCommands.rolesPermitidos[0]) ||
                message.member.roles.cache.some(role => role.name === expresionsCommands.rolesPermitidos[1]) ||
                message.member.roles.cache.some(role => role.name === expresionsCommands.rolesPermitidos[2])
            ) {
                let testedRole = message.guild.roles.cache.get(expresionsCommands.roles[0].key);
                let testedUser = message.mentions.members.first();
                if (!testedUser) return message.channel.send("Debes mencionar a una persona mi rei 😎✋🏻").then((declineMsg) => {
                    message.react('❌')
                });

                testedUser.roles.add(testedRole);
                message.channel.send("Acabas de mandar a ese delincuente a la carcel 😎")
            } else {
                message.channel.send("Adonte tan rapido rufian, no tienes permisos para mandar a la carcel 😎✋🏻")
            }
        }
    }
})