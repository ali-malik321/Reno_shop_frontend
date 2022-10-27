import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
const Category = () => {
	const classes = useStyles()
	return (
		<Grid container justifyContent="space-around">
			<Grid item lg={4} md={6} sm={12}>
				<Paper className={classes.card}>
					<Typography component="h3" className={classes.heading}>
						Women
					</Typography>
					<Link className={classes.action}to="/shop" >Shop now</Link>
				</Paper>
			</Grid>
			<Grid item lg={4} md={6} sm={12}>
				<Paper className={`${classes.card} ${classes.customCard}`}>
					<Typography component="h3" className={classes.heading}>
						Men
					</Typography>
					<Link className={classes.action}to="/shop" >Shop now</Link>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default Category
