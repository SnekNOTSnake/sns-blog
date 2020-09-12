const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`) })

contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
	siteMetadata: {
		title: 'SNS Blog',
		description:
			'A place for me to share whatever I want to share with the world.',
		author: 'SnekNOTSnake',
	},
	plugins: [
		'gatsby-transformer-remark',
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
