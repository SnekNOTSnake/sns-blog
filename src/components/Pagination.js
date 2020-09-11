import React from 'react'
import { Link } from 'gatsby'
import styles from './styles/pagination.module.css'

const Pagination = ({ count }) => {
	if (count < 2) return <div></div>
	return (
		<div className={styles.pagination}>
			{Array.from(new Array(count).keys()).map((i) => (
				<Link
					key={i}
					activeStyle={{
						backgroundColor: '#3b82bd',
						boxShadow: '0 2px 6px rgba(0, 0, 0, 0.75)',
					}}
					to={i === 0 ? '/' : `/page/${i + 1}`}
					className={styles.linkPagination}
				>
					{i + 1}
				</Link>
			))}
		</div>
	)
}

export default Pagination
