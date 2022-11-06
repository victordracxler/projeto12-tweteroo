import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
	{
		username: 'bobesponja',
		avatar: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
	},
	{
		username: 'patrick',
		avatar: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
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
	res.send(tweets);
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
