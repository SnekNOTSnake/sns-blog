import React from 'react'
import querystring from 'query-string'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Search from '../components/Search'

const SearchPage = ({ location }) => {
	const data = querystring.parse(location.search)
	const query = data.query || ''
	const [input, setInput] = React.useState(data.query || '')

	const changeHandler = (e) => {
		const { value } = e.target
		setInput(value)
	}
	const submitHandler = (e) => {
		// Instead of directly search, it redirect the user to the same route
		// but with a different request query
		e.preventDefault()
		if (!input) return
		navigate(`/search?query=${input}`)
	}

	React.useEffect(() => {
		setInput(query)
	}, [query])

	const result = useStaticQuery(graphql`
		query {
			siteSearchIndex {
				index
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Search" />
			<h1>Search</h1>
			<form onSubmit={submitHandler}>
				<input type="search" value={input} onChange={changeHandler} />
				<button type="submit">Search</button>
			</form>
			<Search query={query} searchIndex={result.siteSearchIndex.index} />
		</Layout>
	)
}

export default SearchPage
