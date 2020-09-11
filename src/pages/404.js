import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFound = () => {
	return (
		<Layout>
			<SEO title="Page Not Found" />
			<h1>NotFound</h1>
			<p>The page you're looking for is not available.</p>
		</Layout>
	)
}

export default NotFound
