const latex_convert = (s) => {
    const arr = s.split('')
    const result = []
    let i = 0
    let inMath = false
    let inStyle = false
    const peekNext = () => arr[i+1]
    while (i < arr.length) {
        const c = arr[i]
        if (c === '$') {
            if ( peekNext() === '$') {
                if (inMath) {
                    result.push('}')
                    inMath = false
                } else {
                    result.push('#{')
                    inMath = true
                }
                i += 2
            } else {
                if (inMath) {
                    result.push('}')
                    inMath = false
                } else {
                    result.push('#{')
                    inMath = true
                }
                i++
            }
        } else if (c === '*' && !inMath) {
            if (peekNext() === '*') {
                if (inStyle) {
                    result.push('}')
                    inStyle = false
                } else {
                    result.push('\\strong{')
                    inStyle = true
                }
                i += 2
            } else {
                if (inStyle) {
                    result.push('}')
                    inStyle = false
                } else {
                    result.push('\\em{')
                    inStyle = true
                }
                i++
            }
        } else {
            result.push(c)
            i++
        }
    }
    return result.join('')

}

const fs = require('fs')
const path = process.argv[2]
const file = fs.readFileSync(path, 'utf8').toString()
console.log(latex_convert(file))