const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "sureler",
  description: "Kuran Surelerini okuya bilirsin",
    options:[
        {
            name:"sure",
            description:"Sure seç",
            type:3,
            required:true,
            choices:[
                {
                 name:"Fatiha",
                 value:"fatiha"
                },
                {
                 name:"Bakara",
                 value:"bakara"
                },
                              {
                 name:"Âl-i İmrân",
                 value:"imran"
                }
            ],
        },

    ],

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @returns 
   */
  run: async (client, interaction) => {
        const {guildId,options,channel} = interaction;

        const secim = options.get("sure").value;

        const Embed = new MessageEmbed();
    const member = interaction.member;
   const guild = interaction.guild;
        switch(secim){

      case "fatiha":{ 
        
     const embed = new MessageEmbed()
     .setAuthor({name:interaction.member.user.tag,iconURL:interaction.member.user.avatarURL({dynamic:true})})
     .setTitle(`🇹🇷・Türkçe Okunuş-Fatiha Suresi`)
     .setDescription(`**Bismillahirrahmanirrahim** \r\n 1.Elhamdulillâhi Rabbi’l-âlemîn \r\n 2.Er-Rahmâni’r-Rahîm \r\n 3.Mâliki yevmi’d-dîn \r\n 4.İyyâke na’budu ve iyyâke neste’în \r\n 5.İhdine’s-sırâta’l-mustakîm \r\n 6.Sırâta’l-lezîne en’amte aleyhim \r\n Ğayri’l-meğdûbi aleyhim ve le’d-dâllîn.`)
     .setColor("GREEN");
     interaction.reply({embeds:[embed]});
                
            
        interaction.reply({embeds:[embed]});

                        break;
        }
            case "cikar":


            
                break;
                       

        }
      
        }

};

