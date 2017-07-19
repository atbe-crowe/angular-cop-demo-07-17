# AngularCopDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

---

## Using the `ng` commands

You can only use the `ng` commands using the following command format:

```bash
./node_modules/.bin/ng SOME_COMMAND
```

---

## `ng generate` command

This command is very useful when you need to create a `component`, `service`, `directive`, `pipe`, `guard`, you name it.

The way you would use the command(s):

```bash
./node_modules/.bin/ng generate c COMPONENT_NAME
```

---

## HMR

Hot module reload is an optimization to the deployment process.

Traditionally when you change something in the code base what will happen is:

1. CLI server detects code change.
2. The affected modules are recompiled.
3. The project bundle files are sent to the browser.
4. The browser refreshes the page to reload a bundle.

With HMR the process differs in that steps 3 and 4 are done concurrently by the CLI with a simple but powerful side effect:

3. The CLI server sends the parts of the bundle that were changed to the browser and updates without refreshing the page.
4. **This step does not apply when using the CLI.**

### How do I use HMR?

There are two commands:

- `npm run start` - This will actually run `npm run start.nohmr` so it will start the server with `HMR` disabled.
- `npm run start.hmr` - This will start the project with `hmr` enabled.

---

## Debugging with VSCode

### **Your server must be running (`npm run start`) before attempting to debug**

You will need a file in `TaxPlatform/Source/CH.Tax.TSDP.Web/.vscode/`

The file should be named `launch.json` and is picked up by VSCode to configure the launch options in the VSCode debugger.

The file should contian the following:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome against localhost, with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:4200",
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}",
            "diagnosticLogging": true,
            "sourceMapPathOverrides": {
                "webpack:///./*": "${webRoot}/*"
            }
        },
        {
            "name": "Attach to Chrome, with sourcemaps",
            "type": "chrome",
            "request": "attach",
            "url": "http://localhost:4200",
            "port": 9222,
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}",
            "diagnosticLogging": true,
            "sourceMapPathOverrides": {
                "webpack:///./*": "${webRoot}/*"
            }
        }
    ]
}
```

The above confiruation was copied from [this post](https://github.com/angular/angular-cli/issues/2453#issuecomment-269055938).

**Currently you can only launch a new session, do not try attaching to a session.**

---

## Side notes regarding AOT

AOT (ahead of time compilation) is a very useful addition to the build process. AOT offers the following benefits:

1. Close to 100% code static analysis of `typescript` code, styling analysis like `less` & `css` code, and `html` code that will catch errors at compile time rather than runtime.
2. Tree shaking when building our application. This results is smaller bundle sizes when we deploy which means less bandwidth consumption on our servers.
3. Awesome syntax checking and static analysis in IDEs/editors like VSCode.

And a whole lot more.

These are benefits you get right out of the box with minimal effort and very little to maintain. Just remember to annotate your functions (return types, parameters, etc) and avoid using `any` when annotating.

---

## References/Resources

 - [Code from the demo](https://github.com/atbe-crowe/angular-cop-demo-07-17)
 - [More info on AOT](https://angular.io/guide/aot-compiler)
 - [A reference PDF for some of the `ng` commands you can use](https://cli.angular.io/reference.pdf) **VERY USEFUL**