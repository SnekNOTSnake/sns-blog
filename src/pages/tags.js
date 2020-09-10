import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Tags = ({ data }) => {
	const tags = data.allContentfulBlogPost.group
	return (
		<Layout>
			<SEO title="Home" />
			<h1>All Tags</h1>
			{tags.map((tag) => (
				<ul key={tag.fieldValue}>
					<li>
						#{tag.fieldValue} ({tag.totalCount})
					</li>
				</ul>
			))}
		</Layout>
	)
}

export default Tags

export const query = graphql`
	query {
		allContentfulBlogPost {
			group(field: tags, limit: 1000) {
				fieldValue
				totalCount
			}
		}
	}
`
