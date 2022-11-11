 let ar = process.argv
 const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    username: 'botFazliddinov_5'
    version: "1.18.2"
})

let password = "jobir2009"
 
 bot.on('chat', function(username, message) {
      if(username=='FamousTrain1733' && message.startsWith(ar[3]))
    {
        bot.chat(message.substring(1))
    }
})

bot.on('messagestr', (message) => {
    console.log(message)
     
    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)
    }
    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

async function dig() {
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
    if (pickaxe) await bot.equip(pickaxe, 'hand')
    if(!pickaxe) bot.quit();
  }
  var block = bot.blockAtCursor(7);
  if (!block) return setTimeout(function() {
    dig();
  }, 100);
  await bot.dig(block, 'ignore', 'raycast')
  dig()
}
bot.once("spawn", () => {
    setTimeout(() => {
        dig();
   }, 20000); 
})
bot.on('chat', (username, message) => {
    if (username === 'FamousTrain1733') {
    if (message.indexOf('5') !== -1) {
            var replacement = "5",
                toReplace = "",
                str = message

            str = str.replace(replacement, toReplace)
            bot.chat(str)
        }}})
    bot.on('kicked', console.log)
bot.on('error', console.log)
