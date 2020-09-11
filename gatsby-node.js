const path = require('path')

const createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const results = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	results.data.allContentfulBlogPost.edges.forEach(({ node }) => {
		createPage({
			path: `/posts/${node.slug}`,
			component: path.resolve(__dirname, 'src', 'templates', 'BlogPost.js'),
			context: {
				slug: node.slug,
			},
		})
	})
}

// Create body and description field on node ContentfulBlogPost,
// because it doesn't have one and only have the ID reference.
const onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'ContentfulBlogPost') {
		const body = getNode(node.body___NODE)
		const description = getNode(node.description___NODE)
		createNodeField({ node, name: 'body', value: body })
		createNodeField({ node, name: 'description', value: description })
	}
}

module.exports = {
	createPages,
	onCreateNode,
}
