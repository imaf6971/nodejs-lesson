const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const parseJson = require('./framework/parseJson');
const bodyParser = require('./framework/bodyParser');

const PORT = process.env.PORT || 5000;

const app = new Application();
app.use(bodyParser);
app.use(parseJson);
app.addRouter(userRouter);
app.listen(PORT);
