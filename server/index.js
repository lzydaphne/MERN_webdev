
import express from 'express'; 
//在 package.json 中加入 { "type": "module" }，這時候全部的檔案都會套用 ESModules
//CommonJS – the module system created for Node.js server.
// One script is one module.
import bodyParser from 'body-parser'; 
//Express 經常使用的中介軟體，用於解析請求的資料(body)
//再把解析後的資料傳給其他相關的 middleware 使用
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express(); //第一步，初始化 express實體
/*express 的核心技術之一就是 router，
它之所以複雜是因為他同時包含三個重要的概念：路由，中間件，流
https://ithelp.ithome.com.tw/articles/10202754
中間件(middleware)：串接處理流程
路由(routing)：網址片斷串接
流(stream)：送出回應 request
*/
//app.use() 會使所有 request 經過 middleware 處理
/*
express.json: recognize the incoming Request Object as a JSON Object. 
*/
//limit:	Controls the maximum request body size.
//The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());// Express 預設就會是 mode: no-cors 非同網域不能獲取資源，所以要另外使用cors

// app.use() is used to mount the postRoutes middleware to the application. 用來把 postRoutes 掛載在 application 上
//postRoutes: 用來處理 送往'/posts' 這個端點的request
//any requests to /posts will be handled by the postRoutes middleware.
//notes abput details of postRoutes: 
//C:\Users\daphn\.chatgpt\notes\13xm2gu.md
app.use('/posts', postRoutes); //localhost:5000/posts
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://test:AA550628@cluster0.t6srkp0.mongodb.net/?retryWrites=true&w=majority';
//該process.env屬性返回一個包含用戶環境的對象
const PORT = process.env.PORT|| 5000;

//連結到db，second argument: options object，加入這兩個避免錯誤
//會回傳 promise
//app.listen() starts a server and listens for incoming requests on a specified port.The second argument is a callback function that is executed when the server starts listening,
//Once the server is listening on the specified port, it can receive and handle incoming requests from clients.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
//setting useFindAndModify to false ensures that Mongoose uses the updated findOneAndUpdate() function instead of the deprecated findAndModify() function when updating documents in MongoDB.




