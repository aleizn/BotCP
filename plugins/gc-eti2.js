let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾⺀*

𝐀𝐃𝐈𝐎𝐒 𝐁𝐀𝐒𝐔𝐑𝐀

𝐀𝐃𝐈𝐎𝐒 𝐏𝐎𝐏𝐎

*𝐁𝐘𝐄*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🔥 @${mem.id.split('@')[0]}\n`}
teks += `└𝐁𝐎𝐓 𝐂𝐏`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['eti2 <mesaje>','basura <mesaje>']
handler.tags = ['group']
handler.command = /^(eti2|basura)$/i
handler.admin = true
handler.group = true
export default handler