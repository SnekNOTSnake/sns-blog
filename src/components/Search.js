import React from 'react'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'
import Tag from '../components/Tag'
import styles from './styles/search.module.css'

const Search = ({ query, searchIndex }) => {
	const [index] = React.useState(Index.load(searchIndex))
	const [results, setResults] = React.useState([])

	React.useEffect(() => {
		if (query.length > 2) {
			const data = index
				.search(query, {
					expand: true,
					fields: {
						title: { boost: 4 },
						tags: { boost: 4 },
						description: { boost: 2 },
						body: { boost: 1 },
					},
				})
				.map(({ ref }) => index.documentStore.getDoc(ref))
			setResults(data)
		}
	}, [index, query])

	return (
		<div>
			{results.map((page) => (
				<div key={page.id}>
					<Link to={'/posts/' + page.slug}>
						<h3>{page.title}</h3>
					</Link>
					<p className={styles.description}>{page.description}</p>
					<div className={styles.tags}>
						{page.tags.map((tag) => (
							<Tag key={tag} name={tag} />
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Search
