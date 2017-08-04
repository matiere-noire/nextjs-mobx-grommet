import React, { Component } from 'react'

import Router from 'next/router'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'
import SearchIcon from 'grommet/components/icons/base/Search'
import Image from 'grommet/components/Image'

export default class AppHeader extends Component {

	onClickHandler (href) {
		return (e) => {
			e.preventDefault()
			Router.push(href)
		}
	}

	render() {
		return (
			<Header justify="center" colorIndex="brand">

				MY LOGO

				<Box size={{width: {max: 'xxlarge'}}} direction="row" responsive={false} justify="start" align="center" pad={{horizontal: 'medium'}} flex="grow">

					<Menu label="Label" inline={true} direction="row" flex="grow">
						<Anchor href="#" onClick={this.onClickHandler('/link1')}>LINK 1</Anchor>
						<Anchor href="#" onClick={this.onClickHandler('/link2')} >LINK 2</Anchor>
					</Menu>

					<Box flex="grow" align="end">
						<SearchIcon />
					</Box>
				</Box>
			</Header>
		)
	}
}
