# NativeScript Angular custom loader demo

The application has a single lazily loaded module - `LazyModule` in `src/app/lazy/lazy.module`.

## Running only the webpack build

1. Install the dependencies

```
npm i
```

2. Run webpack

```
npx webpack --env.android
```

After the compilation is over, you will notice that no chunk was generated for the lazy module.

## Running the {N} application

1. Install the dependencies

```
npm i
```

2. Install the prerelease version of {N} CLI

```
npm i -g nativescript@next
```

3. Run the preview command

```
tns preview --bundle
```

4. Follow the instructions printed by the command. You will need a mobile device and will have to install a mobile application from the Play Store or the App Store.

