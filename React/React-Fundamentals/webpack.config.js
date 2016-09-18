module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: './',
        filename: "index_bundle.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel",
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }
        ]
    },
};