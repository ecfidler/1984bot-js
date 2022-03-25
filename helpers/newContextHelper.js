const { userPut, channelPut } = require('./../helpers/apiHelper');

function newMember(member) {

    if (!member?.user) {
        return;
    }

    let tag = member.user.tag;

    payload = {
        "id": member.id,
        "username": member.user.username,
        "nickname": member.displayName,
        "numbers": tag.slice(tag.length-4),
        "bot": member.user.bot,
    };



    return userPut(member.user.id, payload);
}

function newChannel(channel) {

    if (!channel?.guild) {
        return;
    }

    payload = {
        "id": channel.id,
        "name": channel.name,
        "category": channel.parent?.name,
        "thread": channel.isThread(),
    }

    return channelPut(channel.id, payload);
}

module.exports = { newMember, newChannel }