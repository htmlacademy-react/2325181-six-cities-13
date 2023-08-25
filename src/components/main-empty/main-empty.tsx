import { LocationType } from '../../types/types';

type MainEmptyProps = {
  location: LocationType;
}

export default function MainEmpty({location}: MainEmptyProps):JSX.Element {
  return (
    <>
      <section className="cities__no-places" data-testid="main-empty-container">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description" data-testid="main-empty-description">We could not find any property available at the moment in {location}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}
