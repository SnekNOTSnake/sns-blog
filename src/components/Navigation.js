import React from 'react'
import styles from './styles/navigation.module.css'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faIdBadge,
	faTags,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import logo from '../images/sns-white.svg'

const Layout = () => {
	return (
		<nav className={styles.root}>
			<div className={styles.navigationBody}>
				<Link className={clsx(styles.link, styles.logo)} to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div className={styles.menu}>
					<Link className={styles.link} to="/">
						<FontAwesomeIcon className={styles.menuIcon} icon={faHome} />
					</Link>
					<Link className={styles.link} to="/search">
						<FontAwesomeIcon className={styles.menuIcon} icon={faSearch} />
					</Link>
					<Link className={styles.link} to="/tags">
						<FontAwesomeIcon className={styles.menuIcon} icon={faTags} />
					</Link>
					<Link className={styles.link} to="/about">
						<FontAwesomeIcon className={styles.menuIcon} icon={faIdBadge} />
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Layout
