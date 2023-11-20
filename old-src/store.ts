import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/appReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type ReduxRootStateType = ReturnType<typeof rootReducer>
export type ThunkAppDispatchType = ThunkDispatch<ReduxRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<ReduxRootStateType> = useSelector

// @ts-ignore
window.store = store
