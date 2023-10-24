export function filterUniqueObjectsByKeyName<T>(inputArray: T[], key: keyof T): T[] {
    const uniqueObjects: { [key: string]: T } = {};

    inputArray.forEach((item) => {
        const keyValue = item[key];
        if (!uniqueObjects[keyValue as string]) {
            uniqueObjects[keyValue as string] = item;
        }
    });

    return Object.values(uniqueObjects);
}