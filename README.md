# AI Workout - Fitness App

A modern fitness application built with React Native and Expo, featuring a beautiful UI with gradient backgrounds and tab-based navigation.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or newer)
- npm or yarn
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/apple-store/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/amajety1/AI-Workout.git
   cd AI-Workout/FitnessApp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Running the App

#### Local Development
1. Start the development server
   ```bash
   npx expo start
   ```
2. You'll see a QR code in your terminal

3. To view on your device:
   - 📱 iOS: Open your iPhone camera and scan the QR code
   - 🤖 Android: Open Expo Go app and scan the QR code

#### Viewing from Different Network
If you want to share the app with someone on a different network:

1. Install ngrok globally (one-time setup)
   ```bash
   sudo npm install -g @expo/ngrok
   ```

2. Start the app with tunnel option
   ```bash
   npx expo start --tunnel
   ```

3. Share the new QR code with others - they can scan it from anywhere!

## 📱 Features

- Modern, gradient-based UI design
- Tab-based navigation with four main sections:
  - Home (❤️)
  - Search (🔍)
  - History (⏰)
  - Notifications (🔔)
- Clean and intuitive user interface
- Responsive design for various screen sizes

## 🛠 Technical Stack

- React Native
- Expo
- React Navigation
- Expo Router for file-based routing
- TypeScript for type safety

## 📂 Project Structure

```
FitnessApp/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   ├── history.tsx    # History screen
│   │   ├── notifications.tsx  # Notifications screen
│   │   └── _layout.tsx    # Tab navigation configuration
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
├── assets/               # Images, fonts, etc.
└── package.json          # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤔 Troubleshooting

### Common Issues

1. **QR Code not scanning?**
   - Make sure your phone and computer are on the same network for local development
   - Try using the tunnel option if on different networks

2. **Metro bundler issues?**
   ```bash
   # Clear Metro cache
   npx expo start --clear
   ```

3. **Dependencies issues?**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

For more help, check [Expo's documentation](https://docs.expo.dev/) or open an issue in this repository.
