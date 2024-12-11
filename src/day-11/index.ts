
export function decodeFilename(filename: string): string {
    const start = filename.indexOf('_') + 1
    const end = filename.lastIndexOf('.')

    return filename.substring(start, end)
}