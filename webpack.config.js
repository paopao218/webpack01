const path=require("path");
module.exports={
    entry:"./src/index.js",//入口配置
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    mode:"development"
}