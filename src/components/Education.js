import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "0 2rem",
		marginBottom: "3rem",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export default function SimpleAccordion() {
	const classes = useStyles();

	return (
		<div id="education" className={classes.root}>
			<h1 style={{ textAlign: "center" }}>Education</h1>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>
						B.Tech - August 2020
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<p>
							Electrical Engineering, Indian Institute of
							Technology Delhi.
						</p>
						<h5>Extra Curriculars in College</h5>
						<h6>
							Indian Road Safety Campaign (Sep 2017 - Apr 2018)
						</h6>
						<ul>
							<li>Executive, Technical Arm.</li>
							<li>
								Developed basic layout of two websites -
								www.road-safety.co.in,
								www.road-safety.co.in/hackathon
							</li>
							<li>
								Collaborated with several corporations, NGOs to
								organize events, including a Road Safety
								Hackathon and Road Safe Half Marathon.
							</li>
						</ul>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>
						Intermediate(12th) - March 2016
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						MPC, Sri Chaitanya Junior College, Vijayawada. <br />
						All India Rank 597 in JEE Main 2016 Paper 2. <br />
						Secured State Rank 293 in AP-EAMCET, 505 in TS-EAMCET.
						<br />
						Top 1%, NSEP 2015-16 in state of Andhra Pradesh. <br />
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography className={classes.heading}>
						Secondary(10th) - March 2014
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Sri Chaitanya High School, Rajahmundry
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
