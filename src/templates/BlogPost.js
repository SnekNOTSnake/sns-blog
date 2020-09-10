import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './blogPost.module.css'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPost = ({ data }) => {
	const post = data.contentfulBlogPost
	return (
		<Layout>
			<SEO title={post.title} />
			<div style={{ width: '100%', margin: `${rhythm(1)} 0` }}>
				<Img alt={post.title} fluid={post.heroImage.fluid} />
			</div>
			<div className={styles.postBody}>
				<h1>{post.title}</h1>
				<p>{post.description.description}</p>
				<div
					dangerouslySetInnerHTML={{
						__html: post.body.childMarkdownRemark.html,
					}}
				/>
			</div>
		</Layout>
	)
}

export default BlogPost

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			id
			title
			description {
				description
			}
			body {
				childMarkdownRemark {
					html
				}
			}
			heroImage {
				fluid(quality: 95, maxWidth: 1000) {
					...GatsbyContentfulFluid_tracedSVG
				}
			}
		}
	}
`
