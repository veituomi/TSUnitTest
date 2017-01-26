/** @internal */
class TestCase {
    /** @internal */
    private tests: Array<string>;
    /** @internal */
    private timeouts: {[test: string]: number};
    /** @internal */
    private exceptions: Array<boolean>;

    public before: string;
    public after: string;
    public beforeClass: string;
    public afterClass: string;

    constructor() {
        this.exceptions = new Array();
        this.tests = new Array();
        this.timeouts = {};
    }

    addTest(method: string): void {
        this.tests.push(method);
    }

    addTimeout(method: string, time: number): void {
        this.timeouts[method] = time;
    }

    addException(method: string): void {
        this.exceptions[method] = true;
    }

    getException(method: string): boolean {
        return this.exceptions[method] === true;
    }

    getTests(): Array<string> {
        return this.tests;
    }

    getTimeout(method: string): number {
        if (this.timeouts && this.timeouts[method]) return this.timeouts[method];
        return -1;
    }
}