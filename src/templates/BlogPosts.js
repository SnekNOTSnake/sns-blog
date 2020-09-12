import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles/blogPosts.module.css'
import Layout from '../components/Layout'
import Tag from '../components/Tag'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

const Home = ({ data }) => {
	const posts = data.allContentfulBlogPost.edges
	return (
		<Layout>
			<SEO title="Home" />
			<h1>My Posts</h1>
			<div className={styles.posts}>
				{posts.map(({ node }) => (
					<Link
						to={`/posts/${node.slug}`}
						key={node.slug}
						className={styles.post}
					>
						<div className={styles.imageContainer}>
							<Img alt={node.title} fluid={node.heroImage.fluid} />
						</div>
						<div className={styles.postBody}>
							<h3 className={styles.title}>{node.title}</h3>
							<p className={styles.date}>{node.createdAt}</p>
							<p style={{ marginBottom: 16 }}>{node.description.description}</p>
							<div className={styles.tags}>
								{node.tags.map((val) => (
									<Tag key={val} name={val} />
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
			<Pagination
				count={Math.ceil(
					data.paginationData.pageInfo.itemCount /
						Number(process.env.POSTS_PER_PAGE),
				)}
			/>
		</Layout>
	)
}

export default Home

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allContentfulBlogPost(skip: $skip, limit: $limit) {
			edges {
				node {
					title
					slug
					createdAt(formatString: "DD, MMMM YYYY")
					tags
					description {
						description
					}
					heroImage {
						fluid(quality: 85, maxWidth: 600) {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
		paginationData: allContentfulBlogPost {
			pageInfo {
				itemCount
			}
		}
	}
`