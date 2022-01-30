const Discord = require('discord.js')
const Modlog = require("../models/Modlog")
module.exports = {
	name: "guildMemberBoost",
	async execute(member) {
         const modlog = await Modlog.findOne({guild_id: member.guild.id})
          if (!modlog) {
                return
            }else{
                const embed = new Discord.MessageEmbed()
                .setColor("#00FFFF")
                .setTitle(member.user.tag+" has started boosting "+member.guild.name+"!")
                const abc = member.guild.channels.cache.get(modlog.modlog_channel_id)
                abc.send({
                    embeds: [embed]
                })	
            }
    }
}