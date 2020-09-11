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
	const posts = results.data.allContentfulBlogPost.edges

	// Create Posts
	posts.forEach(({ node }) => {
		createPage({
			path: `/posts/${node.slug}`,
			component: path.resolve(__dirname, 'src', 'templates', 'BlogPost.js'),
			context: {
				slug: node.slug,
			},
		})
	})

	// Create Index pagination
	const postsPerPage = Number(process.env.POSTS_PER_PAGE)
	const numPages = Math.ceil(posts.length / postsPerPage)
	// Create the actual Index Page
	createPage({
		path: `/`,
		component: path.resolve(__dirname, 'src', 'templates', 'BlogPosts.js'),
		context: {
			skip: 0,
			limit: postsPerPage,
		},
	})
	// Create other Index Pages
	if (numPages > 1) {
		Array.from(new Array(numPages - 1).keys()).forEach((i) => {
			createPage({
				path: `/page/${i + 2}`,
				component: path.resolve(__dirname, 'src', 'templates', 'BlogPosts.js'),
				context: {
					skip: (i + 1) * postsPerPage,
					limit: postsPerPage,
				},
			})
		})
	}
}

const onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	// Create body and description field on node ContentfulBlogPost,
	// because it doesn't have one and only have the ID reference.
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
