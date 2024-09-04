const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100080355760429"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("🖕(°ㅂ° ╬)🖕| 𝐒𝐚𝐥𝐞 𝐜𝐨𝐧 𝐬𝐞𝐮𝐥 𝐦𝐨𝐧 𝐦𝐚𝐢̂𝐭𝐫𝐞 ʬɸʬ Blåzė Nøvã ʬɸʬ 𝐮𝐭𝐢𝐥𝐢𝐬𝐞́ 𝐥𝐚 𝐜𝐦𝐝 😒🫀' ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝚕𝚎 𝚏𝚒𝚌𝚑𝚒𝚎𝚛 ?? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`💫𝔫𝔬𝔱 𝔣𝔬𝔲𝔫𝔡 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
