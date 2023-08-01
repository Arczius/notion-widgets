function getThemeInfo(urlstring) {
    const url = new URL(urlstring)
    return {
        theme: url.searchParams.get('theme') ?? 'light',
        color: url.searchParams.get('color') ?? 'default',
        font: url.searchParams.get('font') ?? 'sans'
    }
}

export default getThemeInfo