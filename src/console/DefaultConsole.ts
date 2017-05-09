/** @internal */
class DefaultConsole implements TestConsole {
    /** @internal */
    private errors = 0;

    info(message: string) {
        console.info(message);
    }

    log(message: string) {
        console.log(message);
    }

    error(message: string) {
        console.error(message);
        this.errors += 1;
    }

    hasErrors(): boolean {
        return this.errors > 0;
    }
}