export const sleep = async (ms: number): Promise<null> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(null)
        }, ms)
    })
