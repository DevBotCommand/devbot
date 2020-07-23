const Discord = require('discord.js');
const bot = new Discord.Client();
//-----------------------------------------------
bot.on('ready', () => {
console.log(`${bot.user.tag} is logged in!!!`);
bot.user.setActivity('... YOU Crazy People!', {type: 'WATCHING'});
});
//-----------------------------------------------
bot.on('message', (msg)=> {
    const topRole = msg.guild.roles.highest;
    const guildRole = [
         msg.guild.roles.cache.find(m => m.position === topRole.position).id,
         msg.guild.roles.cache.find(m => m.position === topRole.position - 1).id,
         msg.guild.roles.cache.find(m => m.position === topRole.position - 2).id,  
         msg.guild.roles.cache.find(m => m.position === topRole.position - 3).id, 
        ];


    
    const guildChannels = {
        "General":  msg.guild.channels.cache.find(m => m.name.toLowerCase().includes("general") && m.type === "text"),
        "Announcement": msg.guild.channels.cache.find(m => m.name.toLowerCase().includes('announce') && m.type === "text"),
        "Info": msg.guild.channels.cache.find(m => m.name.toLowerCase().includes("info") && m.type === "text"),
    };
    
    const guildMentions = {
        "Person": msg.mentions.members.first(),
        "Channel": msg.mentions.channels.first(),
        "Role": msg.mentions.roles.first(),
    };
    
        if(msg.content.startsWith('!say')){         
            guildRole.toString();
            guildRole.forEach(role => {     
            if(msg.member.roles.cache.has(role)){
                if(guildMentions.Channel === undefined){
                    msg.channel.send('Specify A Channel To Send This In Please');
                } else {
                    const toStringLength = {
                        "Channel": guildMentions.Channel.id.length,
                    };
                     if(toStringLength === undefined){
                         return;
                     } else {
                        guildMentions.Channel.send(msg.content.substring(toStringLength.Channel + 8,));
                     }; 
                };
                msg.delete({timeout: 500, reason: "spam command"})
            } else {
               return;
            };
        });
           
        } else {
       return;
        };
    






});
//-----------------------------------------------
bot.login('NzI1NTExODMzODMzODMyNDY5.Xxlb5w.warQ5ZlynQI80viByJY7gQmxvIM');
//-----------------------------------------------
