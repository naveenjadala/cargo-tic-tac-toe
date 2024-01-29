This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Cargo tic tac toe

[![React Native](https://img.shields.io/badge/React%20Native-v0.73.0-blue.svg)](https://facebook.github.io/react-native/)
[![Node](https://img.shields.io/badge/Node-v18.18.0-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-v10.1.0.14.13-red.svg)](https://www.npmjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

# Overview

This is a simple Tic-Tac-Toe game built using React Native. The purpose of the app is to demonstrate the basics of building a mobile app with React Native and to provide a fun and interactive game for users.

# Features

Two-player gameplay
Clear and intuitive user interface
Basic win detection logic
Turn indicators for each player
Game reset functionality

# Screenshots

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### To run tests

```bash
# using npm
# to run test
npm run test

# to run keep watch on test
npm run test:watch

# to run the code coverage
# (after run the coverage download the coverage report from the coverage folder)
npm run test:coverage
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Folder Structure

```bash
|-- src/
|  |-- components/
|  |  |-- board
|  |  |  |-- Board.tsx
|  |  |  |-- Board.styles.ts
|  |  |  |-- Board.test.ts
|  |  |  |-- Helper.ts
|  |  |  |-- types.ts
|  |  |-- ....
|  |-- screens/
|  |  |-- Home
|  |  |  |-- components/ #related only to home screen
|  |  |  |-- Home.tsx
|  |  |  |-- Home.styles.ts
|  |  |  |-- Home.test.ts
|  |  |  |-- Helper.ts
|  |  |  |-- types.ts
|  |  |-- ....
|-- .gitignore
|-- package.json
|-- README.md
|-- App.tsx
|-- ....
```
