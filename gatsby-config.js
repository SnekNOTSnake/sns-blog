const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
	path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
})

contentfulConfig = {
	spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
	accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
	siteMetadata: {
		title: 'SNS Blog',
		description:
			'A place for me to share whatever I want to share with the world.',
		author: 'SnekNOTSnake',
	},
	plugins: [
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: ['gatsby-remark-prismjs'],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
		{
			resolve: 'gatsby-remark-prismjs',
			options: {
				classPrefix: 'language-',
				inlineCodeMarer: null, // or `>`
				aliases: {
					sh: 'bash',
				},
				showLineNumbers: true,
				noInlineHighlight: false,
				prompt: {
					user: 'SNS',
					host: 'SNS-Desktop',
					// either set prompt.global to true in gatsby-config.js, or pass at least one of `{outputLines: <range>}`, `{promptUser: <user>}`, or `{promptHost: <host>}` to a snippet
					global: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#3b82bd',
				showSpinner: true,
			},
		},
		{
			resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
			options: {
				// Fields to index
				fields: [`title`, `tags`, `body`, `description`, `slug`],
				// How to resolve each field`s value for a supported node type
				resolvers: {
					// For any node of type MarkdownRemark, list how to resolve the fields` values
					ContentfulBlogPost: {
						title: (node) => node.title,
						tags: (node) => node.tags,
						body: (node) => node.fields.body,
						description: (node) => node.fields.description,
						slug: (node) => node.slug,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				lang: 'en',
				name: 'SNS Blog',
				short_name: 'SNS Blog',
				start_url: '/',
				background_color: '#141820',
				theme_color: '#141820',
				display: 'standalone',
				icon: 'src/images/sns.png',
				icon_options: {
					purpose: 'maskable',
				},
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
	],
}
