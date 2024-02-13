import { User } from "@aggregates/Users/User/User";
const ormConfig = {
    "name": "dbconnection",
    "type": "mysql",
    "host": process.env.DB_HOST  || "127.0.0.1",
    "port":  process.env.DB_PORT || 3306,
    "username":  process.env.DB_USER  ||"root",
    "password":  process.env.DB_PASSWORD  || "",
    "database":  process.env.DB_NAME  || "test",
    "synchronize": false,
    "logging": true,
    "entities":[
        User,
    ]
 }

 export default ormConfig;