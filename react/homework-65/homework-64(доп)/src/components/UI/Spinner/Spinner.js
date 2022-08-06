import React from "react";

export default function Spinner({ margin }) {
	return (
		<div className='spinner-border spinner-border-sm' role='status' style={{ margin: margin }}>
			<span className='sr-only'>Loading...</span>
		</div>
	);
}
