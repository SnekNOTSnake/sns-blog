import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = () => {
	return (
		<Layout>
			<SEO title="About" />
			<h1>SnekNOTSnake</h1>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s. "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua."
			</p>
			<h2>Where can I get some?</h2>
			<p>
				There are many variations of passages of Lorem Ipsum available, but the
				majority have suffered alteration in some form, by injected humour, or
				randomised words which don't look even slightly believable. If you are
				going to use a passage of Lorem Ipsum, you need to be sure there isn't
				anything embarrassing hidden in the middle of text. All the Lorem Ipsum
				generators on the Internet tend to repeat predefined chunks as
				necessary, making this the first true generator on the Internet. It uses
				a dictionary of over 200 Latin words, combined with a handful of model
				sentence structures, to generate Lorem Ipsum which looks reasonable. The
				generated Lorem Ipsum is therefore always free from repetition, injected
				humour, or non-characteristic words etc.
			</p>
		</Layout>
	)
}

export default About
