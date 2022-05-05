const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const dotenv = require('dotenv');
dotenv.config();

const { NODE_ENV } = process.env;

module.exports = {
  entry: {
    index: './src/index.ts',
    seed: './src/prisma/seed/index.ts',
  },
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [{ test: /\.ts$/, use: ['ts-loader'] }],
  },
  externals: [nodeExternals()],
};
