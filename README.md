# 프렌드캘린더 클라이언트

- 서로 친구를 추가한 사람들끼리 일정을 공유할 수 있는 앱입니다.

## 개발 환경

---

## 공통

#### Node 설치(없다면)

```bash
brew install node
```

#### watchman 설치 (로컬의 파일 변화 반영)

```
brew install watch
```

## Android

#### Java Development Kit 설치

```
brew tap homebrew/cask-versions
brew install —cask zulu11
```

#### 안드로이드 스튜디오 설치

- Android SDK

- Android SDK Platform

- Android Virtual Device

#### ANDROID_SDK_ROOT 환경변수 설정

.zshrc or .bashrc

```bash
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

### IOS

#### CocoaPods 설치

```
sudo gem install cocoapods
```

M1인 경우

```
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
```

> IOS 실행이 안되는 경우

1. Xcode 설치
2. preference
3. location
4. Command Line Tools를 Xcode로 변경
