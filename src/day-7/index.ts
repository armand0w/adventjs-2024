
export function fixPackages(packages: string): string {
    while  (packages.includes("(") ) {
        packages = packages.replace(/\(([^()]+)\)/g, (_, content) => {
            return content.split("").reverse().join("");
        });
    }

    return packages;
}

export function fixPackages2(packages: string): string {
    const stack: string[] = [];
    let current = "";

    for (const char of packages) {
        if (char === "(") {
            stack.push(current);
            current = "";
        } else if (char === ")") {
            current = stack.pop()! + current.split("").reverse().join("");
        } else {
            current += char;
        }
    }

    return current;
}
