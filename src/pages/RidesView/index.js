import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RideCard from '../../components/RideCard';
import classes from './style.scss';
import { fetchRide } from '../../store/actions/ride';

class RidesView extends React.Component {
  componentDidMount(){
    const { fetchRideNow } = this.props
    fetchRideNow();
  }

  render(){
    const { rides, loading } = this.props;
    const mappedRides = rides.map(ride => {
      const {
        id,
        destination,
        pickup_location,
        departure_date,
        departure_time
      } = ride
      return (
        <RideCard
          key={id}
          destination={destination}
          pickup_location={pickup_location}
          departure_date={departure_date}
          departure_time={departure_time}
        />
      )
    })
    return (
      <div className={classes.ride_container}>
        <Header />
        <div className={classes.main_container}>
          {
            loading ? <div className={classes.loader}></div> : mappedRides
          }
        </div>
        <Footer />
      </div>
    )
  }
};

const mapStateToProps = state => ({
	loading: state.ride.fetchRides.loading,
	rides: state.ride.fetchRides.rides
});

const mapDispatchToProps = dispatch => ({
  fetchRideNow: () => dispatch(fetchRide())
})

export default connect(mapStateToProps, mapDispatchToProps)(RidesView);
