/** Annotates a test class. */
function Testable(target) {
    TestManager.addTestClass(target);
}

/** Annotates a test method. */
function Test(target, propertyKey: string) {
    TestManager.addTest(target.constructor.name, propertyKey);
}

/** Adds a timeout value in the test method.
 * @param time Time in milliseconds.
*/
function Timeout(time: number) {
    return function(target, propertyKey: string) {
        TestManager.addTimeout(target.constructor.name, propertyKey, time);
    }
}

/** Annotates that the test method should throw an exception to work properly. */
function ExpectException(target, propertyKey: string) {
    TestManager.addException(target.constructor.name, propertyKey);
}

/** Annotates a method that is run every time before a test method. */
function Before(target, propertyKey: string) {
    TestManager.setBefore(target.constructor.name, propertyKey);
}

/** Annotates a method that is run every time after a test method. */
function After(target, propertyKey: string) {
    TestManager.setAfter(target.constructor.name, propertyKey);
}

/** Annotates a method that is run once before all test methods. */
function BeforeClass(target, propertyKey: string) {
    TestManager.setBeforeClass(target.constructor.name, propertyKey);
}

/** Annotates a method that is run once after all test methods. */
function AfterClass(target, propertyKey: string) {
    TestManager.setAfterClass(target.constructor.name, propertyKey);
}

/** Annotates that the method is ignored when running tests. */
function Ignore(target: UnitTest, propertyKey: string) {
    console.log(propertyKey + " was ignored.");
}