/** @internal */
class TestManager {
    static testClasses: Array<any> = new Array();
    static testCases: {[key: string]: TestCase} = {};

    static addTestClass(target) {
        this.testClasses.push(target);
    }

    static addTest(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].addTest(method);
    }

    static addTimeout(target: string, method: string, time: number): void {
        this.checkExists(target);
        this.testCases[target].addTimeout(method, time);
    }

    static addException(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].addException(method);
    }

    static setBefore(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].before = method;
    }

    static setAfter(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].after = method;
    }

    static setBeforeClass(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].beforeClass = method;
    }

    static setAfterClass(target: string, method: string): void {
        this.checkExists(target);
        this.testCases[target].afterClass = method;
    }

    /** @internal */
    private static checkExists(target: string): void {
        if (this.testCases[target]) return;
        this.testCases[target] = new TestCase();
    }

    static runTests(testConsole: TestConsole) {
        for (let target of this.testClasses) {
            if (this.testCases[target.name]) {
                let test = new target(target.name, this.testCases[target.name], testConsole);
            }
        }
    }
}