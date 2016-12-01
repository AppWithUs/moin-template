# moin-template

## Prerequisites

### Install latest version of Xcode

Open App Store, download Xcode, done 😋

### Install latest version of Android Studio

- `https://developer.android.com/studio/install.html`
- Install the AVD (Android Virtual Device Manager) and HAXM (Hardware Accelerated Execution Manager)
  - Choose Custom installation when running Android Studio for the first time. Make sure the boxes next to all of the following are checked:
    - `Android SDK`
    - `Android SDK Platform`
    - `Performance (Intel ® HAXM)`
    - `Android Virtual Device`
    - `Then, click "Next" to install all of these components.`
- Install the **Android 6.0 (Marshmallow) SDK**
  - Android Studio installs the most recent Android SDK by default. React Native, however, requires the Android 6.0 (Marshmallow) SDK. To install it, launch the SDK Manager, click on _Configure_ in the _Welcome to Android Studio_ screen.
  - Select _SDK Platforms_ from within the SDK Manager, then check the box next to _Show Package Details_. Look for and expand the Android 6.0 (Marshmallow) entry, then make sure the following items are all checked:
    - `Google APIs`
    - `Intel x86 Atom System Image`
    - `Intel x86 Atom_64 System Image`
    - `Google APIs Intel x86 Atom_64 System Image`
  - Next, select _SDK Tools_ and check the box next to _Show Package Details_ here as well. Look for and expand the _Android SDK Build Tools_ entry, then make sure that Android SDK Build-Tools 23.0.1 is selected.
  - Finally, click _Apply_ to download and install the Android SDK and related build tools.
- Set up the `ANDROID_HOME` environment variable 
- The React Native command line interface requires the `ANDROID_HOME` environment variable to be set up.
- Add the following lines to your `~/.bashrc` (or equivalent) config file:

```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

## First steps
```
# install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node watchman
npm install
npm install -g react-native-cli
```

## Run 4 iOS
```
react-native run-ios
```

## Run 4 Android
```
# either connect your Android device via USB, or start an emulator (android avd)
react-native run-android
```
