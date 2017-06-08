// a reducer takes in two things

//1- the action (info about what happened)
//2-copy of current state

function posts(state = [], actions) {
	console.log('The post will change')
	console.log(state, actions)
	return state
}

export default posts

