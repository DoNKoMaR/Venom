let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/blur', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '*[ β ] π΄π΅π΄π²ππΎ π°πΏπ»πΈπ²π°π³πΎ*', m)
}
handler.help = ['blur','difuminar2']
handler.tags = ['maker']
handler.command = /^(ΡΠ°Π·ΠΌΡΡΠΈΠ΅|difuminar2)$/i
export default handler
