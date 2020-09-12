import React from 'react'
import Layout from '../components/Layout'
import styles from './styles/about.module.css'
import SEO from '../components/SEO'
import bash from '../images/bash.svg'
import express from '../images/express.svg'
import gatsby from '../images/gatsby.svg'
import graphql from '../images/graphql.svg'
import javascript from '../images/javascript.svg'
import linux from '../images/linux.svg'
import mongodb from '../images/mongodb.svg'
import nodejs from '../images/nodejs.svg'
import reactjs from '../images/reactjs.svg'
import vscode from '../images/vscode.svg'

const About = () => {
	return (
		<Layout>
			<SEO title="About" />
			<h1>
				<span role="img" aria-label="Mountain">
					⛰️
				</span>{' '}
				SnekNOTSnake
			</h1>
			<p>
				I, Akhmad Najmuddin usually descend into the darkness of the Internet as
				SnekNOTSnake, am a student of life and truth (<b>if there's any</b>).
				The goal of my life is to find the meaning of life itself, but for now
				I'm in the middle of learning how to build a good website. My other
				hobbies including playing Chess, and watching a historian rants about
				movie historical inaccuracies.
			</p>
			<h2>
				<span role="img" aria-label="Magic">
					✨️
				</span>{' '}
				Favorite Technologies
			</h2>
			<ul className={styles.favTechnologies}>
				<li>
					<a href="https://www.linux.org/">
						<img alt="Linux" src={linux} />
					</a>
				</li>
				<li>
					<a href="https://github.com/microsoft/vscode">
						<img alt="VSCode" src={vscode} />
					</a>
				</li>
				<li>
					<a href="https://www.mongodb.com/">
						<img alt="MongoDB" src={mongodb} />
					</a>
				</li>
				<li>
					<a href="https://github.com/expressjs/express">
						<img alt="Express" src={express} />
					</a>
				</li>
				<li>
					<a href="https://github.com/facebook/react">
						<img alt="Reactjs" src={reactjs} />
					</a>
				</li>
				<li>
					<a href="https://github.com/nodejs/node">
						<img alt="Nodejs" src={nodejs} />
					</a>
				</li>
				<li>
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
						<img alt="JavaScript" src={javascript} />
					</a>
				</li>
				<li>
					<a href="https://github.com/graphql/graphql-js">
						<img alt="GraphQL" src={graphql} />
					</a>
				</li>
				<li>
					<a href="https://www.gnu.org/software/bash/">
						<img alt="Bash" src={bash} />
					</a>
				</li>
				<li>
					<a href="https://www.gatsbyjs.com/">
						<img alt="Gatsby" src={gatsby} />
					</a>
				</li>
			</ul>
		</Layout>
	)
}

export default About
