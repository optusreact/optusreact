export const ASYNC_ERROR = 'ASYNC_ERROR';

 const errorMiddleware = store => next => action => {
	const asyncError = action.type;
	if (asyncError !== ASYNC_ERROR) {
		return next(action);
	}

	const {reducerName,error} = action;
	next({type:`${reducerName}${ASYNC_ERROR}`,error});
}

export default errorMiddleware;