import React from "react";

export default function CatInfo({ data }) {
	const catData = data && data.breeds[0];
	return data ? (
		<div className='mt-3 border rounded' style={{ background: "white" }}>
			<h1 style={{ background: "#cecece" }} className='text-center mb-2 py-5'>
				{catData.name}
			</h1>
			<div className='d-flex'>
				<div className='align-self-center mx-4'>
					<img src={data.url} alt='cat' width='400px' />
				</div>
				<div className='p-5 mx-5'>
					<strong>Description:</strong>
					<p>{catData.description}</p>
					<strong>Temperament:</strong>
					<p>{catData.temperament}</p>
					<strong>Origin:</strong>
					<p>{catData.origin}</p>
					<strong>Weight:</strong>
					<p>{catData.weight.metric} kg</p>
					<strong>Average life span:</strong>
					<p>{catData.life_span} years</p>
				</div>
			</div>
		</div>
	) : null;
}
