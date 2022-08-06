import React from "react";
import Btn from "../UI/Btn/Btn";

export default props => {
	let classes = ["list-group-item"];
	props.completed && classes.push("list-group-item-success");
	return (
		<div className={classes.join(" ")} style={{ height: 50 }}>
			<div className='d-flex w-100 align-items-center justify-content-between'>
				<p className='mb-1'>{props.value}</p>
				<div className='text-right'>
					<Btn type='save' onClick={props.onCompleted} />
					<Btn type='close' onClick={props.onDelete} />
				</div>
			</div>
		</div>
	);
};
