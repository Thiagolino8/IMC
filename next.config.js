/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack5: true,
	experimental: {
		// Enables the styled-components SWC transform
		esmExternals: true,
		concurrentFeature: true,
		ServerComponents: true,
	},
	compiler: {
		styledComponents: true,
	},
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}
		return config;
	},
};

module.exports = nextConfig
