# Implementing an Idle User Detector in Angular without external libraries

## Description

This project was generated with Angular CLI version 17.0.1.

It serves as a simple demonstration of detecting user inactivity using a service called IdleUserService. This detector is useful to identify and handle situations where the user has stopped interacting with the application.

## How it works

This application listens for user activity and starts a countdown when the user becomes inactive. If the countdown reaches zero, it triggers an event indicating the user is idle.

## Project Structure

IdleUserTimes - An enum that holds the idle time and countdown time.
IdleUserService - A service that listens to user activities, starts the idle timer, and emits an event when the user becomes inactive.
AppComponent - The main component that uses IdleUserService to detect user inactivity and provides an option to reset the idle state.

## Features

- User inactivity detection.
- Free external libraries (like to ng-idle).
- Easy to integrate and use in any Angular project.

## Requirements

- Node.js
- Angular CLI

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mariodantemariani/angular-userIdle-libraryFree.git
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Run the project:
   ```
   ng serve
   ```

## Usage

Follow the steps indicates on the next medium's article: [medium](https://mariodante.medium.com/implementing-an-idle-user-detector-in-angular-without-external-libraries-598e75a8a8d4)

## Contributing

Contributions are welcome. Please open an issue if you find a bug or have any suggestions for improving the project.
