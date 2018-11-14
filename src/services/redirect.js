export function isPagePrivate(to) {
    return to.matched.some(record => record.meta.isPrivate)
}

export function redirectFactory() {
    return (to, from, next) => {
        if (isPagePrivate(to)) {
            if (getAccessToken()) {
                next()
            } else {
                next({name: 'Login'})
            }
        } else {
            if (getAccessToken()) {
                next({name: 'Home'})
            } else {
                next()
            }
        }

    }
}
