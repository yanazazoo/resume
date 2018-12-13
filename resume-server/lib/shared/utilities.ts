export function promiseArray(items: any[], block): Promise<any[]> {
    let promises: Promise<any>[] = [];
    items.forEach((item: any) => {
        promises.push(new Promise((resolve, reject) => {
            return block.apply(this, [item, resolve, reject]);
        }));
    });
    return Promise.all(promises);
}
