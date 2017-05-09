# UnitTest

This is a lightweight unit testing library written for TypeScript.

## Features

Features include basic assertions, setting time limit for tests and requiring exceptions to be thrown.

## Requirements

This library works well with latest versions of TypeScript but it utilizes TypeScript decorators,
which means that version 1.7+ is required when targeting ES3. When targeting more recent versions
such as ES5, older versions may work too.

## Example use case

```typescript
@Testable
class TestClass extends UnitTest {
    @BeforeClass
    testClassBefore() {
        // This method is run before all test methods
    }

    @AfterClass
    testClassAfter() {
        // This method is run after all test methods
    }

    @Before
    testMethodBefore() {
        // This method is run before each test method
    }

    @After
    testClassInitialize() {
        // This method is run after each test method
    }

    @Test
    testMethod1() {
        this.assertEquals("This assertion fails if 1 + 1 doesn't equal 2.", 2, 1 + 1);
    }

    @Test @Timeout(100)
    testMethod2() {
        // Something that might be considered time-expensive could be run here, and the test fails if it exceeds 100 ms.
    }

    @Test @ExpectException
    testMethod3() {
        throw("This test would fail without this line.");
    }

    @Ignore
    testMethod4() {
        // This test is ignored and it's stated in the console.
    }
}
```

## How to use

You can either include the source files to your project or build this library and include the
declaration file and the generated JavaScript file.

This library is designed to be used in conjunction with Node.js, and it can be run for example
with the following code.

```javascript
var fs = require("fs");

global.load = function (file) {
    var body = fs.readFileSync(file, { encoding: "utf8" });
    eval.call(global, body);
};

load("Build.js");
load("UnitTest.js");
load("Tests.js");

TestManager.runTests(new DefaultConsole());
```