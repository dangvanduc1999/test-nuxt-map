export function roundToTwoDecimalPlaces(number: number): number {
    return Math.round(number * 100) / 100;
}
