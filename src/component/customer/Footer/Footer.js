import {
	Button,
	Grid,
	List,
	ListItem,
	ListItemText,
	TextField,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Footer = () => {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<Grid container>
				<Grid item lg={3} md={6} sm={12}>
					<List>
						<ListItem className={classes.list}>
							<Typography component="h3" className={classes.heading}>
								Categories
							</Typography>
							<Link to='/shop'
								disableTypography
								primary="Women"
								className={classes.listLink}
							>Women</Link>
							<Link to='/shop'
								disableTypography
								primary="Men"
								className={classes.listLink}
							>Men</Link>
							<Link to='/shop'
								disableTypography
								primary="Men"
								className={classes.listLink}
							>Shoes</Link>

						</ListItem>
					</List>
				</Grid>
				<Grid item lg={3} md={6} sm={12}>
					<List>
						<ListItem className={classes.list}>
							<Typography component="h3" className={classes.heading}>
								Help
							</Typography>
							<ListItemText
								disableTypography
								primary="Tracke Order"
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary="Returns"
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary="Shipping"
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary="FAQs"
								className={classes.listLink}
							/>
						</ListItem>
					</List>
				</Grid>
				<Grid item lg={4} md={6} sm={12}>
					<List>
						<ListItem id='ContactUsID' className={classes.list}>
							<Typography component="h3" className={classes.heading}>
								Contact Us
							</Typography>
							<ListItemText
								disableTypography
								primary="Any questions? Let us know in store at BP 473 Complexe universitaire Al Qods, Oujda 60000 or call us on (+212) 65964665"
								className={classes.listLink}
								style={{ lineHeight: 1.5 }}
							/>
							<ListItemText
								disableTypography
								primary="© 2022,SNEXUS . All Rights Reserved"
								className={classes.listLink}
								style={{ lineHeight: 1.5 }}
							/>
							{/* <ListItemAvatar className={classes.listImg}>
								<Avatar
									className={classes.img}
									alt={`Avatar`}
									src={`${imgPayment4}`}
								/>
								<Avatar
									className={classes.img}
									alt={`Avatar`}
									src={`${imgPayment3}`}
								/>
								<Avatar
									className={classes.img}
									alt={`Avatar`}
									src={`${imgPayment1}`}
								/>
								<Avatar
									className={classes.img}
									alt={`Avatar`}
									src={`${imgPayment2}`}
								/>
							</ListItemAvatar> */}
						</ListItem>
					</List>
				</Grid>
				<Grid item lg={2} md={6} sm={12}>
					<List>
						<ListItem className={classes.list}>
							<Typography component="h3" className={classes.heading}>
								NEWSLETTER
							</Typography>
							<TextField
								placeholder="email@gmail.com"
								className={classes.email}
								InputProps={{
									classes: {
										input: classes.email,
									},
								}}
							/>
							<Button className={classes.action}>Subcribe</Button>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</footer>
	)
}

export default Footer
