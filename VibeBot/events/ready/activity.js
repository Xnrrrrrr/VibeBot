const { ActivityType } = require('discord.js');

const status = [
	{
		name: "Playing your favorite tunes 🎵",
		type: ActivityType.Custom,
	},
	{
		name: "Grooving to the beats 🎧",
		type: ActivityType.Custom,
	},
	{
		name: "Streaming the latest hits 📻",
		type: ActivityType.Custom,
	},
	{
		name: "Rocking the soundwaves 🎸",
		type: ActivityType.Custom,
	},
]

module.exports = (client) => {
	setInterval(() => {
		const random = Math.floor(Math.random() * status.length);
		client.user.setActivity(status[random]);
	}, 60000);
}