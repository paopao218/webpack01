const path=require("path");
module.exports={
    entry:{
        index:"./src/index.js",
        one:"./src/one.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].main.js"
    },
    mode:"development"
}