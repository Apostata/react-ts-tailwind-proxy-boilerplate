import React from "react";
import { useParams } from "react-router-dom";

const AboutDetails = () => {
	const { id } = useParams();
	return(
	<div>
	<h1>AboutDetails {id}</h1>
  </div>
)};

export default AboutDetails;