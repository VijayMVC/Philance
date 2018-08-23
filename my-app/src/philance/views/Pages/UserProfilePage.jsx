import React from "react";
import PropTypes from "prop-types";

import {connect} from 'react-redux'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import userProfileStyles from "philance/views/PageStyles/UserProfileStyles.jsx";

import avatar from "assets/img/faces/marc.jpg";

import {
  textChanged,
  updateProfile,
  userNameChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  cityChanged,
  countryChanged,
  postalCodeChanged,
  descriptionChanged
} from '../../actions/userProfile'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
    this.props.textChanged()
  }

  onUserNameChange(text) {
    this.props.userNameChanged(text)
    this.props.textChanged()
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text)
    this.props.textChanged()
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text)
    this.props.textChanged()
  }

  onCityChange(text) {
    this.props.cityChanged(text)
    this.props.textChanged()
  }

  onPostalCodeChange(text) {
    this.props.postalCodeChanged(text)
    this.props.textChanged()
  }

  onCountryChange(text) {
    this.props.countryChanged(text)
    this.props.textChanged()
  }

  onDescriptionChange(text) {
    this.props.descriptionChanged(text)
    this.props.textChanged()
  }

   onButtonPress() {
    const {
      userName,
      email,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      description
    } = this.props
    this.props.updateProfile({userName, email, firstName, lastName, city, country, postalCode, description})
}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <PermIdentity />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Edit Profile - <small>Complete your profile</small>
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onUserNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onEmailChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onFirstNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onLastNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onCityChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onCountryChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onPostalCodeChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      About me
                    </InputLabel>
                    <CustomInput
                      labelText="Description about me"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        onChange: e => {
                          this.onDescriptionChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Button color="rose" className={classes.updateProfileButton} onClick={()=>{
                  this.onButtonPress()
                  console.log(this.props)
                }}>
                  {this.props.text}
                </Button>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>VOLUNTEER / FREELANCER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>Description about me</p>
                <Button color="rose" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    city: state.user.city,
    country: state.user.country,
    postalCode: state.user.postalCode,
    description: state.user.description,
    text: state.user.text
  }
}

export default connect(mapStateToProps, {
  textChanged,
  updateProfile,
  userNameChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  cityChanged,
  countryChanged,
  postalCodeChanged,
  descriptionChanged
})(withStyles(userProfileStyles)(UserProfile));
