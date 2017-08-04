import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Spinning from 'grommet/components/icons/Spinning'

import Link from 'next/link'

import NewsFeed from '../newsfeed'

@inject('store')
@observer
class Home extends Component {

	constructor(props) {
		super(props)
		const mystore = props.store.myStore
		mystore.fetchData()
	}

	render() {
		const mystore = this.props.store.myStore
		let someDataToDisplay = <Spinning />
		if (mystore.fetching === false) {
			someDataToDisplay = mystore.content.map((item, index) => {
				return (
					<ListItem justify='between' separator='horizontal'>
						<span><Link href={{ pathname:'/'+item.slug, query:{ id:item.id} }}><a>{item.title}</a></Link></span>
						<span>{item.title}</span>
						<span className='secondary'>{item.slug}</span>
					</ListItem>
				)
			})
		}

		return (
			<Box>
				<Box>
					<Hero size="large" background={<Image src='/static/carousel-1.png' fit='cover' full={true} align={{"top": true}} /> }>
						<Card
							colorIndex="light-1"
							heading={
								<div>
									<Heading strong={true}>
										Sumo accumsan mel ignota hendrerit.
									</Heading>
								</div>
							}
							description="Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me."
							label="label"
							size="large"
							link={<Anchor href="#" primary={true} label="Learn More" />}
						/>
					</Hero>
				</Box>

			<Box align="center">
				<Box pad="large" align="center" textAlign="center" size={{"width": {"max": "xxlarge"}}}>
					<Heading tag="h1" strong={true} margin="none">
						Sumo accumsan mel ignota hendrerit.
					</Heading>
					<Paragraph size="xlarge" width="large">
						Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo
						copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit
						consequuntur me.
					</Paragraph>
					<List>
						{someDataToDisplay}
					</List>
				</Box>
			</Box>

			<Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
				<Box align="center"
				size={{"width": "xxlarge"}} pad={{horizontal: "large"}}>
				<Heading tag="h2" strong={true}>
				Recent News
				</Heading>
				</Box>
				<NewsFeed />
			</Box>
			<Footer full="horizontal">
			<Box colorIndex="neutral-1" pad="large" align="center" full="horizontal">
				<Box className="footer-cards-container" pad={{vertical: "medium"}}
				size={{width: 'xxlarge'}} direction="row" flex="grow">
				<Card
					pad={{horizontal: "large"}}
					contentPad="medium"
					heading="Lorem ipsum dolor sit amet"
					label="Label"
					basis="1/2"
					link={
						<Anchor href="http://www.grommet.io/docs/" primary={true}>
						Learn More
						</Anchor>
					}
					separator="right"
				/>
				<Card
					pad={{horizontal: "large"}}
					contentPad="medium"
					heading="Lorem ipsum dolor sit amet"
					label="Label"
					basis="1/2"
					link={
						<Anchor href="http://www.grommet.io/docs/" primary={true}>
						Learn More
						</Anchor>
					}
				/>
				</Box>
			</Box>
			</Footer>
			</Box>
		)
	}
}

export default Home
