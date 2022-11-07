import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
	{
		username: 'bobesponja',
		avatar: 'https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj',
	},
	{
		username: 'patrick',
		avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b1/Patrick_Estrela.png/200px-Patrick_Estrela.png',
	},
	{
		username: 'lulamolusco',
		avatar: 'https://veja.abril.com.br/wp-content/uploads/2016/11/lula-mostra-a-lc3adngua.jpg?quality=70&strip=all',
	},
];

const tweets = [
	{
		username: 'bobesponja',
		tweet: 'eu amo o hub',
	},
	{
		username: 'patrick',
		tweet: 'eu amo o hub',
	},
	{
		username: 'patrick',
		tweet: 'eu amo o hub',
	},
	{
		username: 'lulamolusco',
		tweet: 'eu amo o hub',
	},
	{
		username: 'bobesponja',
		tweet: 'eu amo o hub',
	},
];

app.post('/sign-up', (req, res) => {
	const { username, avatar } = req.body;
	const newUser = {
		username: username,
		avatar: avatar,
	};
	users.push(newUser);

	res.send('OK');
});

app.get('/tweets', (req, res) => {
	const lastTenTweets = [];
	if (tweets.length > 10) {
		for (let i = tweets.length - 10; i < tweets.length; i++) {
			lastTenTweets.push(tweets[i]);
		}
	}

	const tweetsWithAvatar = (tweets.length > 10 ? lastTenTweets : tweets).map(
		(obj) => {
			const find = users.find((item) => item.username === obj.username);
			const newObj = { ...obj, avatar: find.avatar };
			return newObj;
		}
	);

	res.send(tweetsWithAvatar);
});

app.post('/tweets', (req, res) => {
	console.log(req.body);
	const { username, tweet } = req.body;

	const newTweet = {
		username,
		tweet,
	};
	tweets.push(newTweet);

	res.send('OK');
});

app.listen(5000, () => {
	console.log('App running at port: 5000');
});
