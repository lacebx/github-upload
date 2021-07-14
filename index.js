const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg2MjU0MDg5Mzc3Njc3Mzgy.XmUn4Q.e4UbAVFqxcPHyO5f7Xm_pFSFVmE';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online ');
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('Hello!');
        }
    })
    
        bot.on('message', msg=>{
        if(msg.content === "who is your favourite rapper"){
            msg.reply('lil uzi and chief keef.. XD');
        }
    })
    
    bot.on('message', msg=>{
        if(msg.content === "anyone else online"){
            msg.reply('Oh im here. Dont take me for granted. I could Please you in any way necessary...:wink::wink:');
        }
    })
    
    bot.on('message', msg=>{
        if(msg.content ==="excuse me"){
            msg.reply('You sir, are Excused');
        }
    })
    
    bot.on('message', msg=>{
        if(msg.content ==="thanks shu"){
            msg.reply('You are most Welcome master');
        
    }
    
    })
    bot.on('message', msg=>{
        if(msg.content ==="what version are you"){
            msg.reply('Version 1.0.0');
        
    }
    
    })
    bot.on('message', msg=>{
        if(msg.content ==="bot"){
            msg.reply('Hello');
        
    }
    
    })
    bot.on('message', msg=>{
        if(msg.content === "not you"){
            msg.reply('Oh sorry my bad');
        }
    })

    bot.on('message', msg=>{
        if(msg.content === "Hi"){
            msg.reply('Hello!');
            }
        })

        bot.on('message', msg=>{
            if(msg.content === "Hey"){
                msg.reply('Hello!');
                }
            })

            bot.on('message', msg=>{
                if(msg.content === "DIOOO"){
                    msg.reply('THAT BAKA IS LONGGONE JOJO!');
                    }
                })

                bot.on('message', msg=>{
                    if(msg.content === "wanna vc"){
                        msg.reply('If it means listening to your beautiful voice! Then count me in');
                        }
                    })

                    bot.on('message', msg=>{
                        if(msg.content === "the six paths of pain"){
                            msg.reply('*Flickers to the master\'s side*!');
                            }
                        })

                        bot.on('message', msg=>{
                            if(msg.content === "Hello!"){
                                msg.reply('Hi!');
                                }
                            })   
                        
bot.login(token);