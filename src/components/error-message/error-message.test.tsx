import {render, screen} from '@testing-library/react';
import ErrorMessage from './error-message';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Error Message',() => {
  it('should render correctly', () => {
    const ERROR_MESSAGE_TEST_ID = 'error-message-text';
    const TEST_ERROR_MESSAGE = 'Sample Error Message';
    const errorState = makeFakeStore();
    errorState.error.error = TEST_ERROR_MESSAGE;
    const {withStoreComponent} = withStore(<ErrorMessage />, errorState);
    render(withStoreComponent);
    expect(screen.getByTestId(ERROR_MESSAGE_TEST_ID)).toBeInTheDocument();
  });
});
