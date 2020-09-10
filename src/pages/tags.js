import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Tag from '../components/Tag'
import SEO from '../components/SEO'

const Tags = ({ data }) => {
	const tags = data.allContentfulBlogPost.group
	return (
		<Layout>
			<SEO title="Home" />
			<h1>All Tags</h1>
			<div className="Tags">
				{tags.map((tag) => (
					<Tag
						key={tag.fieldValue}
						name={tag.fieldValue}
						text={`#${tag.fieldValue} ( ${tag.totalCount} )`}
					/>
				))}
			</div>
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
