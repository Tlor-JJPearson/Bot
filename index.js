function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  
const { Client, GatewayIntentBits } = require('discord.js')
const { rmSync } = require('fs')
//const nodemon = require('nodemon')
//const path = require('path')
//const { joinVoiceChannel } = require('voice');

require('dotenv/config')
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');
const { createAudioPlayer } = require('@discordjs/voice');
const { createAudioResource, StreamType } = require('@discordjs/voice');
const { join } = require('node:path');
const { createReadStream } = require('node:fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ],
})

client.on('ready',() => {
    console.log('Koakuma is ready')
})


//NEW MEMBER
client.on('guildMemberAdd', member => {
    const targetChannelId = '1028427249952763927'//TymkowyReżim #ogólny
    //const backupChannelId = '1001852428620144640' //Kosmos #ogólny
    console.log(member)
    var chan
    if(member.guild.channels.cache.get(targetChannelId)){
        chan = member.guild.channels.cache.get(targetChannelId)
        chan.send('Witamy na Tymkowym Reżimie!')
    }
    else {console.log('Elligible channel not found')}
    return
})

////////////////////////////////////////////////

//MESSAGE SCANNER
client.on('messageCreate', message => {
    if (message.author.bot) { return; }
    
    const msg = message.content.toLowerCase()

    if(msg === 'koa sad') {
        song = between(0,6);
        switch (song) {
            case 0:
                message.reply('https://youtu.be/eVTXPUF4Oz4')
                break
            case 1:
                message.reply('https://youtu.be/6J5cN87c2yM')
                break
            case 2:
                message.reply('https://youtu.be/dQw4w9WgXcQ')
                break
            case 3:
                message.reply('https://youtu.be/UIp6_0kct_U')
                break
            case 4:
                message.reply('https://youtu.be/w6JsCnK1Z-M')
                break
            case 5:
                message.reply('https://youtu.be/K7R_xQUiZvg')
                break
            default:
                message.reply('la la la')
                break
        }
        message.reply('Hang in there, buddy!')
        return
    }
    //if (msg === 'koa lick armpits') {
    //    message.channel.send('https://images-ext-1.discordapp.net/external/L5Q_TKTsqkn_hIf7OOfnzyA7OjjIA2FtG4OJ7WYPMog/https/media.tenor.com/pWpslsWn1YIAAAPo/armpit-anime.mp4')
    //}
    
///////////////////////////////////////////////////////////

    const player = createAudioPlayer();
    //const voiceChannel = message.guild.channels.cache.find(channel => channel.name === 'pogaduchy') //hardcode
    var voiceChannel = message.member.voice.channel;
    if(msg.includes('koa yakuza')||msg.includes('koa touhou')) {
        var resource;
        if(msg.includes('koa yakuza')){
            if(msg === 'koa yakuza nishiki') resource = createAudioResource('tenyears.mp3');
            else if(msg === 'koa yakuza 4') resource = createAudioResource('forfaith.mp3');
            else if(msg === 'koa yakuza receive1') resource = createAudioResource('recieve1.mp3');
            else {
                message.reply('Proszę podać konkretny utwór po komendzie!\nDostępne utwory:\nNishiki (For Who\'s Sake)\n4 (For Faith)\nRecieve1 (Receive You)');
                return;
            }
        }
        if(msg.includes('koa touhou')){
            if(msg === 'koa touhou eosd st4') { resource = createAudioResource('voile.mp3');
            message.react('❤️').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })}
            else if (msg === 'koa touhou ufo byakuren') resource = createAudioResource('byakuren.mp3');
            else if (msg === 'koa touhou sa satori') resource = createAudioResource('satori.mp3');
            else {
                message.reply('Proszę podać konkretny utwór po komendzie!\nDostępne utwory:\nEoSD St4 (Voile the Magic Library)\nUFO Byakuren (Emotional Skyscraper ~ Cosmic Mind)\nSA Satori (Satori Maiden ~ 3rd Eye)');
                return;
            }
        }
        if (voiceChannel === null) {
            message.reply('Najpierw dołącz na kanał głosowy!');
            return;
        }
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: "1028427248891596922", // <<<<<<<< SPECIFIC GUILD ID, YOU MUST CHANGE IT TO YOUR SERVER'S ID!!!!!
            adapterCreator: voiceChannel.guild.voiceAdapterCreator
        })
        connection.subscribe(player);
        player.play(resource);
        return
    }
    if(msg === 'koa stop') {
        if (getVoiceConnection(voiceChannel.guild.id)) {getVoiceConnection(voiceChannel.guild.id).destroy()}
        player.stop();
        return
    }
    if(client.voice.channel === null) player.stop();

/////////////////////////////////////////////////////////////

    if(msg === 'koa' || msg.includes('<@1085650469860409455>')) {
        message.reply('Jestem Gurą, a nie dołem').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
    }
    
    if(msg === 'koa dm') {
        message.author.send('Wołaliście mnie?').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
        return
    }

    if(msg.includes('normi')) {
        message.reply('P̷̨̡̦̖̠̻̤̗̞͋͜R̵̰̼̮̭͈͙̳̱̞͇̥͌͌́̌̇̂̉͛̏́́̃̈́͑͝Ẓ̷̙̹̥͎͙̝̘͍̖̀͑Ȇ̴̡̧̨̛̼͈̝̙̗̩̭͕̙͛̽̈́̈́͛̀͒̓̇̏̃̕ͅS̵͚̣̬̰͕͖̭̹̖̦͐̇͂̇͌̆̀͒͆̒̄̎̚̚͝T̵̜̼̺͚̔̀ͅA̵̢͙̼͍̮͍̘͎͇̭͎͎͍̗͖̦͎͛̓̌̓̓Ṇ̶̡̢̥͎̣̹̩̖̲̩̙̗́́̑̍)').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
    }
    
    if(msg.includes('reżim')) {
         message.react('🫡').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
    }
    
    if(msg.includes('cope')||msg.includes('copiu')||msg.includes('kołp')) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'MimaCope');
        if(reactionEmoji) {message.react(reactionEmoji).catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })}
        else {message.react('😣').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })}
    }
    
    if(msg.includes('cunn')||msg.includes('cuny')||msg.includes('cnnu')||msg.includes('cuni')
    ||msg.includes('kuni')||msg.includes('kani')||msg.includes('cnuy')){
        message.react('😭').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
    }

    if(msg.includes('nigg')||msg.includes('czarnu')||msg.includes('murzy')) {
        message.react('🤎').catch(err1 => { message.channel.send('Ktoś mnie blokuje 😢') })
    }
})

//----------------------------------------------------

client.login(process.env.DISCORD_TOKEN)
