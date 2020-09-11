import React from 'react'
import chroma from 'chroma-js'
import { Link } from 'gatsby'
import styles from './styles/tag.module.css'
import specialTags from '../assets/specialTags.json'

const Tag = ({ name, text = '' }) => {
	const index = specialTags.findIndex((el) => el.name === name)
	const bgColor =
		index > -1 ? specialTags[index].color : 'rgba(255, 255, 255, 0.75)'
	const isLight = chroma(bgColor).luminance() > 0.5

	return (
		<Link
			style={{
				backgroundColor: bgColor,
				color: isLight ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
			}}
			className={styles.tag}
			to={`/search?query=${name}`}
		>
			{text ? text : '#' + name}
		</Link>
	)
}

export default Tag
