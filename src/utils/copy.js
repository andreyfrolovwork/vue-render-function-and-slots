export function deepCopy(obj, originalReferences = new WeakMap(), copiedReferences = new WeakMap()) {
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

export default function copy(source, paths) {
    if (paths.length === 0) {
        return {}
    }

    if (paths.length === 1 && paths[0] === '') {
        return deepCopy(source)
    }

    const copyObject = {}

    paths.forEach((path) => {
        const pathParts = path.split('.')
        let currentSource = source
        let currentCopy = copyObject

        for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i]
            if (currentSource.hasOwnProperty(part)) {
                currentSource = currentSource[part]

                if (i === pathParts.length - 1) {
                    // Достигли конечного свойства, копируем его
                    currentCopy[part] = deepCopy(currentSource)
                } else {
                    // Продолжаем по пути
                    currentCopy[part] = currentCopy[part] || {}
                    currentCopy = currentCopy[part]
                }
            } else {
                // Если путь не существует, устанавливаем текущее значение в undefined
                break
            }
        }
    })

    return copyObject
}

