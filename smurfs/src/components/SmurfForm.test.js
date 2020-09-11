import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SmurfForm from './SmurfForm';

describe('Add a New Smurf', () => {
  const initialState = {name: '', age: '', height: ''}
  const mockStore = configureStore()
  let store, wrapper

  it('First Text input Shows New Smurfs Name', () => {
    store = mockStore(initialState)
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <SmurfForm />
      </Provider>
    )

    expect(getByPlaceholderText('New Smurfs Name')).not.toBeNull()
  })
})