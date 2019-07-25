module.exports = {
    generateRandom: async (count) => {
        for (let i = 0; ; i++) {
            let random = Math.floor(Math.random() * count);
            if (random !== 12) {
                return Promise.resolve(random);
            }
        }
    }
}