const { Client,  MessageEmbed, Permissions} = require("discord.js");

module.exports = {
  name: "steam-oyun-ara",
  description: "Oyun ararsıj",
  type: 1,
  options: [
    {
        name:"kanal",
        description:"Açıklaması Değiştirilicek Kanalı Ayarlarsın!",
        type:7,
        required:true,
        channel_types:[0]
    },
    {
        name:"açıklama",
        description:"Kanal Açıklamasını Girin!",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
  if(!interaction.member.permissions.has("ManageChannels")) return interaction.reply("Bu işlem için Kanalları Yönet yetkisine ihtiyacın var!");
    const aciklama = interaction.options.getString('açıklama')
    const kanal2 = interaction.options.getChannel('kanal')
    client.channels.cache.get(kanal2.id).setTopic(aciklama)
interaction.reply("<#"+kanal2+"> Kanalının Açıklaması Başarıyla **"+aciklama+"** Olarak Değiştirildi.")

  }

};