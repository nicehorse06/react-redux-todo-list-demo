const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,  // 搜索所有js檔案
				exclude: /node_modules/,  // 除了 node_modules 檔
				use: {
					loader: 'babel-loader', // 使用這個 loader
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']  // 這順序表示先轉React，再轉ES6語法
					}
				}
			},
			{
				use: ["style-loader", "css-loader"],  // css-loader 讓 Webpack 有能力來處理 CSS 的 Loader，而 style-loader 則是會將處理後的 CSS 套用到你的頁面。
				test: /\.css$/
			}
		]
	},

	// plugins 跟 loader最大的差別是 plugin 跟檔案裡的內容無關
	plugins: [
		// template要指定到index.html所在之路徑
		// webpack會自動產生/dist/index.html，並且會有bundle的連結
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
		})
	]
}