import React, { Component } from 'react'

import GrommetApp from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Header from './Header'

class Page extends Component {
	render() {
		return (
			<GrommetApp centered={false}>
				<Box>
					<Header />
					{this.props.children}
				</Box>
			</GrommetApp>
		)
	}
}

export default Page
