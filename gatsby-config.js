const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, 'config.env') })

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
						body: (node) => node.fields.body.body,
						description: (node) => node.fields.description.description,
						slug: (node) => node.slug,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'GatsbyNetlifyContentfulStarter',
				short_name: 'GatsbyNetlifyContentful',
				start_url: '/',
				background_color: '#6b37bf',
				theme_color: '#6b37bf',
				display: 'standalone',
				icon: 'src/images/sns.png',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
	],
}
