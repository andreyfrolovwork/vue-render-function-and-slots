/*export default*/
// function deepCopy(obj, originalReferences = new WeakMap(), copiedReferences = new WeakMap()) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }
//
//     // Проверяем, был ли этот объект скопирован ранее
//     if (copiedReferences.has(obj)) {
//         return copiedReferences.get(obj);
//     }
//
//     // Создаем новый объект или массив в зависимости от типа obj
//     const copy = Array.isArray(obj) ? [] : {};
//
//     // Регистрируем оригинальный объект и его копию в WeakMap
//     originalReferences.set(copy, obj);
//     copiedReferences.set(obj, copy);
//
//     // Рекурсивно копируем свойства или элементы
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepCopy(obj[key], originalReferences, copiedReferences);
//         }
//     }
//
//     return copy;
// }
function deepCopy(obj, copies = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Проверяем, был ли этот объект скопирован ранее
    if (copies.has(obj)) {
        return copies.get(obj);
    }

    // Создаем новый объект или массив в зависимости от типа obj
    const copy = Array.isArray(obj) ? [] : {};

    // Регистрируем оригинальный объект и его копию в copies
    copies.set(obj, copy);

    // Рекурсивно копируем свойства или элементы
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], copies);
        }
    }

    return copy;
}

function copy(source, paths) {
    if (paths.length === 0) {
        return {};
    }

    if (paths.length === 1 && paths[0] === '') {
        return deepCopy(source)
    }

    const copyObject = {};

    paths.forEach(path => {
        const pathParts = path.split('.');
        let currentSource = source;
        let currentCopy = copyObject;

        for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];
            if (currentSource.hasOwnProperty(part)) {
                currentSource = currentSource[part];

                if (i === pathParts.length - 1) {
                    // Достигли конечного свойства, копируем его
                    currentCopy[part] = deepCopy(currentSource);
                } else {
                    // Продолжаем по пути
                    currentCopy[part] = currentCopy[part] || {};
                    currentCopy = currentCopy[part];
                }
            } else {
                // Если путь не существует, устанавливаем текущее значение в undefined
                break;
            }
        }
    });

    return copyObject;
}

//
//
// function copy(obj, paths) {
//     function copyValue(source, target, path) {
//         if (!path.length) {
//             return
//         }
//
//         const key = path[0]
//
//         if (key === 'c') debugger
//
//         if (source.hasOwnProperty(key)) {
//             if (Array.isArray(source[key])) {
//                 target[key] = target[key] || []
//                 copyValue(source[key], target[key], path.slice(1))
//             } else if (typeof source[key] === 'undefined') {
//                 target[key] = undefined
//             } else if (source[key] === null) {
//                 target[key] = null
//             } else if (typeof source[key] === 'object') {
//                 target[key] = target[key] || {}
//                 copyValue(source[key], target[key], path.slice(1))
//             } else {
//                 target[key] = source[key]
//             }
//         }
//     }
//
//     const result = {}
//
//     paths.forEach((path) => {
//         copyValue(obj, result, path.split('.'))
//     })
//
//     return result
// }

module.exports = copy
module.exports.deepCopy = deepCopy
