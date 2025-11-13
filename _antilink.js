let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let linkRegex1 = /whatsapp.com\/channel\/([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants }) {
if (!m.isGroup) return 
if (isAdmin || isOwner || m.fromMe || isROwner) return

let chat = global.db.data.chats[m.chat];
let delet = m.key.participant;
let bang = m.key.id;
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin);
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');
let bot = global.db.data.settings[this.user.jid] || {};
const isGroupLink = linkRegex.exec(m.text) || linkRegex1.exec(m.text);
const grupo = `https://chat.whatsapp.com`;
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`✦ El antilink está activo pero te salvaste por ser admin.`);
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
if (m.text.includes(linkThisGroup)) return !0;
}
await conn.sendMessage(m.chat, { text: `*HE DETECTADO UN ENLACE*\n\n${user} Rompiste las reglas del Grupo serás eliminado...`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
if (!isBotAdmin) return conn.sendMessage(m.chat, { text: `El antilink está activo pero no puedo eliminarte porque no soy admin.`, mentions: [...groupAdmins.map(v => v.id)] }, { quoted: m });
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
if (responseb[0].status === "404") return;
}} // else if (!bot.restrict) {
// return m.reply(`${emoji} ¡Esta característica está deshabilitada!`);
// }
return !0;
}

/**const linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const channelLinkRegex = /whatsapp\.com\/channel\/([0-9A-Za-z]{20,30})/i  // Enlaces de canales

export async function before(m, { conn, participants, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1

    let chat = global.db.data.chats[m.chat]
    if (!chat) return !0

    // ⚙️ Obtener metadatos del grupo
    const groupMetadata = await conn.groupMetadata(m.chat)

    // 📱 Detección real del bot (corrige IDs raros tipo 2177896...)
    const botNumber = conn.user.jid
    const botData = groupMetadata.participants.find(p => p.id === botNumber)
    const botIsAdmin = botData && ['admin', 'superadmin'].includes(botData?.admin)

    // 🧠 Detectar enlaces de grupo o canal
    const isGroupLink = linkRegex.exec(m.text)
    const isChannelLink = channelLinkRegex.exec(m.text)

    if (chat.antiLink && (isGroupLink || isChannelLink) && !isAdmin) {
        // Evitar que el bot se elimine a sí mismo si el enlace es del mismo grupo
        if (botIsAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }

        // ⚠️ Mensaje de advertencia
        await conn.reply(
            m.chat,
            `📱 *Enlace Detectado*\n\n@${m.sender.split('@')[0]} publicó un enlace no permitido.\n` +
            `${botIsAdmin ? '🚫 Será eliminado junto con su mensaje.' : '📱 Tienes suerte... el bot no es admin 😅'}`,
            null,
            { mentions: [m.sender] }
        )

        // 🛠️ Si el bot tiene permisos, borra el mensaje y expulsa al usuario
        if (botIsAdmin && chat.antiLink && global.opts['restrict']) {
            try {
                await conn.sendMessage(m.chat, { delete: m.key })
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                console.log(`✅ Usuario ${m.sender} eliminado por enviar enlace.`)
            } catch (err) {
                console.error('❌ Error al eliminar usuario:', err)
            }
        }
    }

    return !0
}*/