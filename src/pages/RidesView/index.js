import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RideCard from '../../components/RideCard';
import classes from './style.scss';
import SingleRideModal from '../../components/SingleRideModal';
import { fetchRide, getRide } from '../../store/actions/ride';

class RidesView extends React.Component {
  state = {
    modal: {
      show: false
    }
  }

  componentDidMount(){
    const { fetchRideNow } = this.props
    fetchRideNow();
  }

  showModal = (id) => {
    this.setState({
      modal: {
        show: true
      }
    })
    this.props.getSingleRide(id);
  }

  hideModal = () => {
    this.setState({
      modal: {
        show: false
      }
    })
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
          show={() => this.showModal(id)}
        />
      )
    })

    return (
      <div className={classes.ride_container}>
        <Header />
        <SingleRideModal
          show={this.state.modal.show}
          handleClose={this.hideModal}
          ride={this.props.ride}
        />
        <h2 className={classes.heading}>Available rides</h2>
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
  rides: state.ride.fetchRides.rides,
	ride: state.ride.singleRide
});

const mapDispatchToProps = dispatch => ({
  fetchRideNow: () => dispatch(fetchRide()),
  getSingleRide: (id) => dispatch(getRide(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RidesView);
