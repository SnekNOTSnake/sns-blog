import React from 'react'
import styles from './styles/layout.module.css'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div className={styles.root}>
			<Navigation />
			<div className={styles.content}>
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
