const Discord = require("discord.js");
const client = global.client;
const logs = require('discord-logs');
logs(client);


// ---------------------------------------------- ///

client.on('guildMemberBoost', (member) => {

  let sunucuID = ("823494359072505866")
  let kanalID = ("825040275025821706")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier

    const Savage = new Discord.MessageEmbed()
.setColor("#ff66f0")
.setAuthor(`${member.user.tag}`,member.user.avatarURL({dynamic: true}))
.setDescription(`**<@${member.user.id}> sunucumuzu boostlayıp, bizi desteklediğin için teşekkürler!**\n**(Sunucumuzda şuan __${boost}__ Boost bulunmaktadır ve Sunucu Seviyesi __${tier}__.)**\n\n**Artık <@&803720232270954557> rolüne sahipsin ve** **__bazı ayrıcalıkların__** **var;**\n**• Sunucuda __kendi adını__** \`»\` **__.rich__ değiştirebileceksin.**\n**• Sunucudaki yetkililere ulaşıp sunucuya istediğin \`1 emojiyi\` ekletebilirsin.**`)
.setTimestamp()
    //.addField("Sunucunun Boost sayısı:", `**${boost}**`,true)
    //.addField("Sunucunun Seviyesi:", `**${tier}**`, true)
.setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1")

   client.channels.cache.get(kanalID).send(Savage);
});


client.on('guildMemberUnBoost', (member) => {

  let sunucuID = ("823494359072505866")
  let kanalID = ("825040275025821706")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier

    const Savage = new Discord.MessageEmbed()
.setColor("#ff66f0")
.setAuthor(`${member.user.tag}`,member.user.avatarURL({dynamic: true}))
.setDescription(`**<@${member.user.id}> sunucumuzu boostlamayı bıraktığı için tüm ayrıcalıkları sona erdi ve <@&803720232270954557> rolü alındı!** \n**(__${boost}__ Boost bulunmaktadır ve Sunucu Seviyesi __${tier}__.)**`)
.setTimestamp()
    //.addField("Sunucunun Boost sayısı:", `**${boost}**`,true)
    //.addField("Sunucunun Seviyesi:", `**${tier}**`, true)
.setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1")

   client.channels.cache.get(kanalID).send(Savage);
});


client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

  let sunucuID = ("823494359072505866")
  let kanalID = ("825040275025821706")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier
    const Savage = new Discord.MessageEmbed()
.setColor("#ff66f0")
.setAuthor(`Seviye Yükseldi`)
.setDescription(`**Sunucumuzun seviyesi yükseldi!** \n**(__${boost}__ Boost bulunmaktadır ve Sunucunun güncel Seviyesi __${tier}__.)**`)
.setTimestamp()
    //.addField("Sunucunun Boost sayısı:", `**${boost}**`,true)
    //.addField("Sunucunun Seviyesi:", `**${tier}**`, true)
.setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1")

   client.channels.cache.get(kanalID).send(Savage);
});


client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
  let sunucuID = ("823494359072505866")
  let kanalID = ("825040275025821706")

  let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount
  let tier = client.guilds.cache.get(sunucuID).premiumTier
    const Savage = new Discord.MessageEmbed()
.setColor("ff66f0")
.setAuthor(`Seviye Düştü!`)
.setDescription(`**Sunucumuzun seviyesi düştü!** \n**(__${boost}__ Boost bulunmaktadır ve Sunucunun güncel Seviyesi __${tier}__.)**`)
.setTimestamp()
    //.addField("Sunucunun Boost sayısı:", `**${boost}**`,true)
    //.addField("Sunucunun Seviyesi:", `**${tier}**`, true)
.setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1")

   client.channels.cache.get(kanalID).send(Savage);
});



//Kod CALISIYORMU diye bakmaniza saglayan bir yardim komutudur.

client.on("message", async message => {
  if (message.content === ".boost") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip değilsin!");
    // - yerine prefixi yaz
    client.emit(
      "guildMemberBoost",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.on("message", async message => {
  if (message.content === ".unboost") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip değilsin!");
    // - yerine prefixi yaz
    client.emit(
      "guildMemberUnBoost",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.on("message", async message => {
  if (message.content === ".levelup") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip değilsin!");
    // - yerine prefixi yaz
    client.emit(
      "guildBoostLevelUp",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.on("message", async message => {
  if (message.content === ".leveldown") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip değilsin!");
    // - yerine prefixi yaz
    client.emit(
      "guildBoostLevelDown",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

// ----------------------------------------------

client.login(global.Ayarlar.Token).catch(err => {console.error("Geçersiz bir token girmişsin.")});
