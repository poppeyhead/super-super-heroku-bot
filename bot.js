const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!sim";

var admin = new Array("226468431208251392","239869619832094721","221669156611686400","221708794609008640","178336092901081088","264608145320443905","105640584470937600") // remember to add them to the list for calls
var superadmin= new Array ("221669156611686400","221708794609008640","178336092901081088"); 
var banned=      new Array ("214904107465572354","221288171013406720")
var owner= new Array ("221669156611686400","264608145320443905","178336092901081088")
const status = `!sim help | ${client.guilds.size} Servers `;
var time= (`${new Date()}`)
const cmds=false

client.on('ready', () => {
console.log(client.guilds.size);
  	console.log('loading ready stuff');
	console.log('I am ready!');


  client.user.setGame(`!sim help | ${client.guilds.size} Servers `);
  client.user.setPresence({ status: 'online', game: { name: `!sim help | ${client.guilds.size} Servers `, type: 1, url:'https://www.twitch.tv/poppeyhead' } });
	client.user.setStatus('online');
const fetch = require('snekfetch')
fetch.post('https://discordbots.org/api/bots/295310183305969665/stats')
  .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5NTMxMDE4MzMwNTk2OTY2NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA4NDU1MTUxfQ.iy0RLd2gYv_SqT1eUqhVDlnQM3oYiyD6syIMo0HbE8o')
  .send({   "server_count": client.guilds.size })
.then(console.log('loaded and logged'))
 .catch(console.error); 
 const embed = new Discord.RichEmbed()
  .setTitle('Bot Online')
  .setColor('#5dddb2')
  .setDescription(`Simple has turned on at ${new Date()}`)
   .addField('Server Count',
    `Servers: ${client.guilds.size}`)
     .addField('Game Stats',
    `Playing: !sim help | ${client.guilds.size} Servers`)
  
        .addField('Bot Uptime',
    `Uptime: ${client.uptime}`)

 .setImage('https://i.imgur.com/uY2P8Vu.png')
  .setFooter('Simple is running!'); 
 client.guilds.get('295335560653045770').channels.get('330135648499531776').send({embed}).catch(console.error);  



 
 

});

client.on('message', message => {
 try {
  if (message.content.startsWith( prefix + " EnableCmds")&& owner.indexOf(message.author.id) > -1) {
    const cmds= false
  }
  if (cmds == true) return;
  if (message.author.bot) return;

  

  if(message.channel.type === 'dm') {
		return message.author.send(`Message in DM is not supported by this bot. Please use a channel on discord to run commands or invite me to one! Invite Link: https://discordapp.com/oauth2/authorize?client_id=295310183305969665&scope=bot&permissions=248887`).catch(console.error)
 
}


if(banned.indexOf(message.author.id) > -1 && message.content.startsWith(prefix) ) {
  return message.reply(`You are banned ${message.author}`).catch(console.error)
  console.log(`${message.author} was banned by a mod. CMD tried to run`)

}
	if (message.content === prefix + ' help') {
  message.author.send('For admin help, say !sim Call, say !sim admincmds to see some commands you can use if you are an admin. Also, here is other commands! 23 cmds, 1:"!sim help", 2: "!sim How do I add you to my server?", 3: "!sim Who are your Founders?", 4: "!sim Play a song.", 5: "!sim Hack someone.", 6: "!sim Can you spam?", 7: "!sim I hate you.", 8:"!sim Hello!", 9: "!sim Who are you?",10: "!sim How do I join your discord?",11: "!sim Tell me the fun fact of the day.",12: "!sim What is the point of adding you to my server?",13: "!sim What is the song of the day?",14: "!sim What is a Typical Command?", 15: "!sim Run Typical Command.",16: "Simple, how is Timmy doing?",17: "!sim Test", 18: !sim Are you hiring?,19: !sim Who am I?, 20: !sim Ping, 21: !sim report @(user),22: !sim Call, 23: !sim admincmds ').catch();
	}
   if (message.content === prefix + ' How do I add you to my server?') {
    message.reply('Go here: https://discordapp.com/oauth2/authorize?client_id=295310183305969665&scope=bot&permissions=248887').catch(console.error)
	console.log ('add to server Command ran')
  }
     if (message.content === prefix + ' Who are your founders?') {
    message.reply('I am founded by vbg12345678 and poppeyhead').catch(console.error)
		console.log ('founder Command ran')
  }
       if (message.content === prefix + ' Play a song.') {
    message.reply('https://www.youtube.com/watch?v=RhU9MZ98jxo').catch(console.error)
		console.log ('song Command ran')
  }
  if (message.content === prefix + ' Hack someone.') {
    message.reply('Ok!').catch(console.error)
		
	
	message.reply('ERROR: I hate you so ur a dumb person now c;').catch(console.error)
	message.reply('I hacked you!!').catch(console.error)
		console.log ('hack Command ran')
  }
    if (message.content === prefix + ' Can you spam?') {
    message.reply('Yes!').catch(console.error)
	message.reply('Make me mad to make me spam!') .catch(console.error)
		console.log ('can you spam Command ran')
	}
  if (message.content === prefix + ' I hate you.') {
    console.log ('spamming a server')
	message.reply('Ok! Now here is revenge').catch(console.error)
	message.reply('IM A DUMB PERSON').catch(console.error)
	message.reply('IM A DUMB PERSON').catch(console.error)
	message.reply('IM A DUMB PERSON').catch(console.error)
	message.reply('Stopped so you can enjoy your time!').catch(console.error)
		console.log ('i hate u Command ran')
  }
	 if (message.content === prefix + ' Hello!') {
    message.reply('Hi!').catch(console.error)
		console.log (' hello Command ran')
	}
	 if (message.content === prefix + ' Who are you?') {
    message.reply('I am a bot that executes Simple commands! Please say !sim help for a list of my commands! Lastly, I have perfect grammar and you can contact popphelp#8301 for any suggestions or comments about me! He also accepts fan mail and bug reports! Creators: popphelp and vbg12345678').catch(console.error)
		console.log ('who are you Command ran')
	}
	
	 if (message.content ===  '@Simple') {
    message.reply('Please do not use @Simple as I am not programmed to say anthing but this. Use !sim help').catch(console.error)
		console.log ('Command ran')
	}
	if (message.content === ' @Simple#2427') {
    message.reply('Please do not use @Simple as I am not programmed to say anthing but this. Use !sim help').catch(console.error)
		console.log ('Command ran')
	}
		if (message.content ===  `<@295310183305969665>`.startsWith('Thing')) {
    mess
	}
		if (message.content ===  '@295310183305969665'.startsWith('Thing')) {
    message.reply('Please do not use @Simple as I am not programmed to say anthing but this. Use !sim help').catch(console.error)
	
	}
	if (message.content === prefix + ' How do I join your discord?') {
    message.reply('https://discord.gg/PZcSxJA').catch(console.error)
		console.log ('join our discord Command ran')
	}
	if (message.content === prefix + ' Tell me the fun fact of the day.') {
    message.reply('Did you know that, Like fingerprints, everyone tongue print is different?').catch(console.error)
		console.log ('fun fact Command ran')
	}
	if (message.content === prefix + ' What is the point of adding you to my server?') {
    message.reply('I give you funny stuff and maybe things you never knew! I do not get boring over time as my creator adds new stuff every day! Send new things to popphelp#8458.').catch(console.error)
		console.log ('point of adding Command ran')
	}
	if (message.content === prefix + ' What is the song of the day?') {
    message.reply('https://www.youtube.com/watch?v=8gsGhdZDC-0').catch(console.error)
		console.log ('song of the day Command ran')
	}
		if (message.content === prefix + ' What is a Typical Command?') {
    message.reply('A Typical command is not your Typical Command, it is better like TypicalMoments!').catch(console.error)
		console.log ('typical command explination Command ran')
	}
			if (message.content === prefix + ' Run Typical Command.') {
    message.reply('Typical Moments is a great person and that is why this command is made, so everyone knows how great he is!').catch(console.error)
		console.log ('typical Command ran')
	}


if (message.content === prefix + ' Bot Offline' && admin.indexOf(message.author.id) > -1) {

  client.user.setPresence({ status: 'invisible'} );

    console.log('Status COmmand Ran, now Offline');
}

if (message.content === prefix + ' Bot Online' && admin.indexOf(message.author.id) > -1) {

  client.user.setPresence({ status: 'online'} );

    console.log('Status COmmand Ran, now Online');
}


	if (message.content === 'Simple, how is Timmy doing?') {
    message.reply('Well not good').catch(console.error)
	message.reply('He seems a bit hot').catch(console.error)
	message.reply('https://cdn.discordapp.com/attachments/254687167744311298/303009090018476053/unknown.png').catch(console.error)
		console.log ('Checked on timmy')
	}
if (message.content === prefix + ' Server Check' && admin.indexOf(message.author.id) > -1) {

   message.reply(client.guilds.size).catch(console.error);
	console.log (client.guilds.size);
}
 if (message.content === prefix + ' Test') {
    message.reply('Simple is functioning!').catch(console.error)
	console.log ('Tested')
  }
  
   if (message.content === prefix + ' Are you hiring?') {
    message.reply('We are hiring lots of people! Please join our discord for more info! https://discord.gg/PZcSxJA').catch(console.error)
	console.log ('Tested')
  }
  if (message.content === prefix + ' Update' && superadmin.indexOf(message.author.id) > -1) {

   client.user.setGame('Major Updates | UnFunctional');
   message.reply('UPDATES ARE NOW OCCURING').catch(console.error)

   client.user.setPresence({ status: 'invisible'} );
	
}
	  if (message.content === prefix + ' Fix' && admin.indexOf(message.author.id) > -1) {

   client.user.setPresence({ status: 'online', game: { name: `!sim help | ${client.guilds.size} Servers `, type: 0 } });
   message.reply('Fixed').catch(console.error)
	client.user.setStatus('online');
	console.log ('Bot Fixed');

}
	
	if (message.content === prefix + ' admincmds' && admin.indexOf(message.author.id) > -1) {

    message.author.send("Admin commands: !sim Fix : Allows you to reset bot to it's normal state, !sim Update : Changes the bot to it's updating status so we can let them know when we're updating!//superadmins// , !sim Server Check : Tells you the amount of servers the bot is in. , !sim Bot Online : Sets the bot online , !sim Bot Offline : Puts the bot in invisible mode., !sim DeleteChannel //this is for superadmins only//, !sim Disconnect //this is for superadmins only//,!sim Lockdown //superadmins only// , !sim kick (user) (reason), !sim Info, !sim ban (user) (reason)")
.catch(console.error); 
    console.log('Admin has checked commands');
}
			if (message.content === prefix + ' Who am I?') {
    message.reply('You are..').catch(console.error)

		message.reply(`${message.author.username}`)
		console.log ('who am i Command ran')
	}
	if (message.content === prefix + ' DeleteChannel' && superadmin.indexOf(message.author.id) > -1) {
		const embed = new Discord.RichEmbed()
  .setTitle('Delete Channel Info Conformation')

  .setColor(0x00AE86)
  .setDescription(`${message.author.username} has deleted the channel "${message.channel.name}" on guild "${message.guild.name}" on  " ${new Date()} ". This is logged to the owner of this bot`)
  .setFooter('Thanks for keeping discord servers safe!');
client.guilds.get('295335560653045770').channels.get('330136508092907532').send({embed}).catch(console.error);  
	
message.channel.delete()
 .then() 
 .catch(console.error); 

}
if (message.content === prefix + ' Disconnect' && superadmin.indexOf(message.author.id) > -1) {

   
	 message.guild.leave()
 .then(g => console.log(`Left the guild ${g}`))
 .catch(console.error);
}
if (message.content === prefix + ' Lockdown' && superadmin.indexOf(message.author.id) > -1) {

   const embed = new Discord.RichEmbed()
  .setTitle('Lockdown Conformation')
  .setColor("RED")
  .setDescription(`${message.author.username} has locked down the guild "${message.guild.name}"  on  " ${new Date()} ". A server admin may only lift the lockdown. This is logged to the owner of this bot`)
   .addField('Guild Owner Info',
    `Name: ${message.guild.owner}, ID: ${message.guild.ownerID}`)
	
	.setFooter('Thanks for keeping discord servers safe!');
	 
client.guilds.get('295335560653045770').channels.get('330136508092907532').send({embed}).catch(console.error);  
	 message.author.send( {embed} ).catch(console.error); ;
	 message.guild.defaultChannel.send(`A superadmin has lockeddown the server. I will now send a conformation ticket to you.`).catch(console.error); ;
   message.guild.defaultChannel.send({embed}).catch(console.error); ;


message.guild.setVerificationLevel(3)
}
if (message.content === prefix + ' Info' && admin.indexOf(message.author.id) > -1) {

    const embed = new Discord.RichEmbed()
  .setTitle('Bot Info')
  .setColor("BLUE")
  .setDescription(`Time: ${time}`)
   .setThumbnail('https://i.imgur.com/uY2P8Vu.png')
   .addField('Guild Count',
    `Servers: ${client.guilds.size}`)
     .addField('Game Stats',
    `Playing: !sim help | ${client.guilds.size} Servers`)
  
        .addField('Bot Uptime',
    `Uptime: ${client.uptime}`)
        .addField('Ping',
    `Ping: ${client.ping}`)
  .setFooter('Simple is running!');
 
 
 message.reply({embed}).catch(console.error)


    console.log('Info Checked');
}

     if (message.content === prefix + ' Call') { 
       message.reply ('Calling for a Mod').catch(console.error)
    const person=message.author
    message.channel.createInvite({ maxAge: 0, maxUses: 10})

        .then((invite) => {
           client.guilds.get('295335560653045770').channels.get('323664366664810503').send('@everyone ALERT!').catch(console.error);  
		client.guilds.get('295335560653045770').channels.get('323664366664810503').send((`${message.author.username} has requested you from the guild ${message.guild.name}. Server: ${message.channel.name}. Please come to resolve the issue ` + invite.url)).catch(console.error);  
 
       } 
     
       ).catch(console.error); 
       
        
 
       
}
if (message.content === prefix + ' Ping') { 
const embed = new Discord.RichEmbed()
  .setTitle('PONG!')
  .setColor("BLUE")
  .setDescription(`${client.ping}`)
 
}

if (message.content.startsWith( prefix + " kick")&& admin.indexOf(message.author.id) > -1) {

  const args = message.content.split(' ');
  const member = message.mentions.members.first();
  const reason= args.splice(3, args.length).toString().replace(/,/g, " ");
  if (member.kickable) {
  member.kick(reason);
  
  }
  else  {
    message.reply("Member not kickable").catch(console.error)
  }
}
if (message.content.startsWith( prefix + " ban")&& admin.indexOf(message.author.id) > -1 ) {
  const args = message.content.split(' ');
  const member = message.mentions.members.first();
  const reason= args.splice(3, args.length).toString().replace(/,/g, " ");
  if (member.bannable) {
    member.ban(reason);
    const embed = new Discord.RichEmbed()
    .setTitle('Banned User')
    .setColor(0x00AE86)
    .setDescription (`${message.author.username} has banned someone on a guild. Guild: ${message.guild.name}  on   ${new Date()} Person: ${member} Reason: ${reason}`)
    .setFooter('Simple');
   client.guilds.get('295335560653045770').channels.get('330136508092907532').send({embed}).catch(console.error);  
 
    }
    else  {
      message.reply("Member not bannable").catch(console.error)
    }
}

 if (message.content.startsWith( prefix + " report")) {
  const args = message.content.split(' ');
  const person = message.mentions.members.first();
  const reason= args.splice(3, args.length).toString().replace(/,/g, " ");
  
  
       message.channel.createInvite({ maxAge: 0, maxUses: 5})

        .then((invite) => {
         const embed = new Discord.RichEmbed()
  .setTitle('Reported User')
  .setColor(0x00AE86)
  .setDescription (`${message.author.username} has reported someone on a guild. Guild: ${message.guild.name}  on   ${new Date()} Person: ${message.guild.member(user)} Reason: ${reason}`)

  .setFooter('Simple');
client.guilds.get('295335560653045770').channels.get('323664366664810503').send('@everyone ALERT!').catch(console.error);  
 client.guilds.get('295335560653045770').channels.get('323664366664810503').send({embed}).catch(console.error);  
 client.guilds.get('295335560653045770').channels.get('323664366664810503').send(invite.url).catch(console.error);  

     
  });
}
 
  if (message.content.startsWith( prefix + " warn")&& admin.indexOf(message.author.id) > -1) {
    const args = message.content.split(' ');
    const person = message.mentions.members.first();
    const reason= args.splice(3, args.length).toString().replace(/,/g, " ");
  
       message.channel.createInvite({ maxAge: 0, maxUses: 5})

        .then((invite) => {
         const embed = new Discord.RichEmbed()
  .setTitle('Reported User')
  .setColor(0x00AE86)
  .setDescription (`${message.author.username} has warned someone on a guild. Guild: ${message.guild.name}  on   ${new Date()} Person: ${message.guild.member(user)}  Reason: ${reason}`)

  .setFooter('Simple');
client.guilds.get('295335560653045770').channels.get('346822051455041536').send('@everyone ALERT!').catch(console.error);  
 client.guilds.get('295335560653045770').channels.get('346822051455041536').send({embed}).catch(console.error);  
 client.guilds.get('295335560653045770').channels.get('346822051455041536').send(invite.url).catch(console.error);  

       
  });
}
if (message.content.startsWith( prefix + " unban")&& admin.indexOf(message.author.id) > -1 ) {

  
  
   message.mentions.users.map(user => {
     const userid= user.id
    message.guild.unban(`${userid}`).catch(console.error);
         const embed = new Discord.RichEmbed()
  .setTitle('Command ran')
  .setColor(0x00AE86)
  .setDescription (`${message.author.username} has ran command in"${message.guild.name}"  on  " ${new Date()} Command: unban They unbanned${message.guild.member(user)}`)
  .setFooter('Simple');
    client.guilds.get('295335560653045770').channels.get('330136508092907532').send({embed}).catch(console.error);  
    
  })
}

       if (message.content.startsWith( prefix + " say")&& admin.indexOf(message.author.id) > -1) {
        
          const args = message.content.split(' ');
          const text= args.splice(2, args.length).toString().replace(/,/g, " ")
          if (!text) return message.channel.send('Please enter something to say!');
         
        message.channel.send(`${text}`).catch(console.error)
        message.delete().catch(console.error)
        }

        if (message.content.startsWith( prefix + " purge")&& admin.indexOf(message.author.id) > -1) {
          
            const args = message.content.split(' ');
            const text= args.splice(2, args.length).toString().replace(/,/g, " ")
            if (!text) return message.channel.send('Please enter an amount!').catch(console.error);
           message.channel.bulkDelete(text).catch(console.error)
          
          }
          if (message.content.startsWith( prefix + " dm")&& owner.indexOf(message.author.id) > -1) {
            
              const args = message.content.split(' ');
              const text= args[2]
              const msg= args.splice(3, args.length).toString().replace(/,/g, " ")
              if (!text) return message.channel.send('Please enter an id!').catch(console.error);
             var user= client.fetchUser(text).then(user => {
             user.send(msg).catch(console.error)
             }).catch(console.error)
            }
           
          if (message.content.startsWith( prefix + " unban")&& owner.indexOf(message.author.id) > -1) {
            
            const args = message.content.split(' ')
            const member= args.splice(2, args.length).toString().replace(/,/g, " ")
            message.guild.fetchBans(message.guild)
         if (member == "")
         {
           message.reply("Supply a person").catch(console.error)
         }
         else{
                message.guild.unban(member,"admin unbanned")
                message.reply("Unabanned").catch(console.error)
         }
              
             
          }
          if (message.content.startsWith( prefix + " OverideBotShutdown")&& owner.indexOf(message.author.id) > -1) {
            client.destroy()
          }
          if (message.content.startsWith( prefix + " OverideBotStatus")&& owner.indexOf(message.author.id) > -1) {
            const args = message.content.split(' ');
            const reason= args.splice(2, args.length).toString().replace(/,/g, " ");
            client.user.setPresence({ game: { name: `${reason}`}});
            client.user.setGame(`${reason}`);
          }
          if (message.content.startsWith( prefix + " DisableCmds")&& owner.indexOf(message.author.id) > -1) {
            const cmds= true
          }
        }
        catch(e) {console.log(e)}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
