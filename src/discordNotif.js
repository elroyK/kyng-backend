const { WebhookClient } = require('discord.js');

const discordNotif = (body) => {
    const message = `${body.contact.firstName} ${body.contact.lastName} completed the form for ${body.company.name}`

    const webhookClient = new WebhookClient({ 
        id: process.env.DISCORD_WEBHOOK_ID, 
        token: process.env.DISCORD_WEBHOOK_TOKEN 
    });

    webhookClient.send({
        content: `<@&${process.env.DISCORD_ROLE_ID}> ${message}`,
    }).then(res => {
        console.log(`Message successfully sent to <@&${process.env.DISCORD_ROLE_ID}>`)
    }).catch(e => {
        console.log("Error");
        console.error(e);
    });
};

exports.discordNotif = discordNotif;