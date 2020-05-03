// code by @lempiy

class IDsGenerator {
    constructor(runes, size) {
        this.runes = runes
        this.size = size
        this._gen = this.letterYielder()
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateID() {
        let id = ""
        while (id.length != this.size) {
            id += this._gen.next().value
        }
        return id
    }

    *letterYielder() {
        let prev = -1
        while (true) {
            let i = prev
            while (i == prev) {
                  i = IDsGenerator.getRandomInt(0, this.runes.length - 1)
            }
            prev = i
            yield this.runes[i]
        }
    }
}

const asciiGen = new IDsGenerator(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    12
)

asciiGen.generateID()
// "UYNB9sBG089d"

const rusGen = new IDsGenerator(
  "0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
    20
)

rusGen.generateID()
// "шВРЧёЖ767шЛюРГЫьагр9"