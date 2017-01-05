module.exports = (template) => {
    const contentMarker = '<!-- APP -->'
    const i             = template.indexOf(contentMarker)

    return {
        head: template.slice(0, i),
        tail: template.slice(i + contentMarker.length)
    }
}
