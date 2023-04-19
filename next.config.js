const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/about',
                    destination: '/about',
                },
                {
                    source: '/contact',
                    destination: '/contact',
                },
            ],
            afterFiles: [
                {
                    source: '/o-nas',
                    destination: '/about',
                },
                {
                    source: '/kontakt',
                    destination: '/contact',
                },
            ],
        }
    },
}
