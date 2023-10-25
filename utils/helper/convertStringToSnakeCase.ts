export function convertToSnakeCase(inputString: string): string {
    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/ /g, "-");
    const outputString = inputString.replace(/[^a-z0-9-]/g, "");
    return outputString;
}
