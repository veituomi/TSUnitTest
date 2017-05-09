interface TestConsole {
    info(message: string);
    log(message: string);
    error(message: string);

    hasErrors(): boolean;
}