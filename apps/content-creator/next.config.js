/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["kd-ui", "tailwindconfig"],
    experimental: {
        esmExternals: 'loose',
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    webpack: (config) => {
        config.experiments = {
            topLevelAwait: true,
            layers: true
        }
        return config
    },
    env: {
        GOOGLE_CLIENT_ID: '879745171056-s59rnofgdb6isqhaheb4efjfkjnimsa9.apps.googleusercontent.com',
        NEXTAUTH_SECRET: 'jvkQhyonkApQGlk49NCJkzsAfRb6FU7',
        NEXTAUTH_URL: 'http://localhost:3001',
    }
}

module.exports = nextConfig
