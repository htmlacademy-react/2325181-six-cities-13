import {render, screen} from '@testing-library/react';
import { Location } from '../../const';
import MainEmpty from './main-empty';

describe('Component: Main Empty', () => {
  it('should render correctly', () => {
    const expectedLocation = Location.Paris;
    const expectedText = new RegExp(`.+${expectedLocation}`,'i');
    const mainEmptyContainerTestId = 'main-empty-container';
    const mainEmptyDescriptionTestId = 'main-empty-description';

    render(MainEmpty({location: expectedLocation}));
    const mainEmptyContainer = screen.getByTestId(mainEmptyContainerTestId);
    const mainEmptyDescription = screen.getByTestId(mainEmptyDescriptionTestId);

    expect(mainEmptyContainer).toBeInTheDocument();
    expect(mainEmptyDescription).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});

