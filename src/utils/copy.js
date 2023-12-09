/*export default*/
function deepCopy(obj, originalReferences = new WeakMap(), copiedReferences = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Проверяем, был ли этот объект скопирован ранее
    if (copiedReferences.has(obj)) {
        return copiedReferences.get(obj);
    }

    // Создаем новый объект или массив в зависимости от типа obj
    const copy = Array.isArray(obj) ? [] : {};

    // Регистрируем оригинальный объект и его копию в WeakMap
    originalReferences.set(copy, obj);
    copiedReferences.set(obj, copy);

    // Рекурсивно копируем свойства или элементы
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], originalReferences, copiedReferences);
        }
    }

    return copy;
}


function copy(obj, paths) {
    function copyValue(source, target, path) {
        if (!path.length) {
            return
        }

        const key = path[0]

        if (key === 'c') debugger

        if (source.hasOwnProperty(key)) {
            if (Array.isArray(source[key])) {
                target[key] = target[key] || []
                copyValue(source[key], target[key], path.slice(1))
            } else if (typeof source[key] === 'undefined') {
                target[key] = undefined
            } else if (source[key] === null) {
                target[key] = null
            } else if (typeof source[key] === 'object') {
                target[key] = target[key] || {}
                copyValue(source[key], target[key], path.slice(1))
            } else {
                target[key] = source[key]
            }
        }
    }

    const result = {}

    paths.forEach((path) => {
        copyValue(obj, result, path.split('.'))
    })

    return result
}

module.exports = copy
module.exports.deepCopy = deepCopy
