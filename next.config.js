const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // You can change the name of the file here if needed
    cvFilename: 'SaiHlyanPhyoe_resume.pdf'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files/',
            name: '[name].[ext]'
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
