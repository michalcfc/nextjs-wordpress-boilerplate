const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/',
                    destination: '/',
                },
                {
                    source: '/about',
                    destination: '/about-us',
                },
                {
                    source: '/offer',
                    destination: '/offer',
                },
                {
                    source: '/upload-files',
                    destination: '/upload-files',
                },
                {
                    source: '/projects',
                    destination: '/projects',
                },
                {
                    source: '/contact',
                    destination: '/contact',
                },
            ],
            afterFiles: [
                {
                    source: '/strona-glowna',
                    destination: '/',
                },
                {
                    source: '/o-nas',
                    destination: '/about-us',
                },
                {
                    source: '/oferta',
                    destination: '/offer',
                },
                {
                    source: '/wyslij-pliki',
                    destination: '/upload-files',
                },
                {
                    source: '/realizacje',
                    destination: '/projects',
                },
                {
                    source: '/kontakt',
                    destination: '/contact',
                },
            ],
        }
    },
}
