import { resolve } from "path"

module.exports = {
    resolve:{
        fallback:{
            "url" : require.resolve("url/")
        },
    },
};