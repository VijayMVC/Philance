import React from "react";
import PropTypes from "prop-types";

import {connect} from 'react-redux'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import { CountryDropdown } from 'react-country-region-selector';

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

import {registerToast} from '../../actions/register'

import {
  textChanged,
  updateProfile,
  contactChanged,
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
    this.state = { country: '', region: '' };
  }

  componentWillUnmount() {
    this.props.registerToast()
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
    this.props.textChanged()
  }

  oncontactChange(text) {
    this.props.contactChanged(text)
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
      contact,
      email,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      description
    } = this.props
    this.props.updateProfile({contact, email, firstName, lastName, city, country, postalCode, description})
}

  render() {
    const { classes } = this.props;
    const { country, region } = this.state;
    return (
      <div className={classes.container}>
        {this.props.showToast?
          <h3 className={classes.welcomeHeading}>
            Welcome to Philance! Please take a few moments to complete your User Profile and you can then post a project or join an existing project.
          </h3>
       :null
       }
       <br/>
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
                  <GridItem xs={12} sm={12} md={12}>
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
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onFirstNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Interests
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Select
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      Animal Welfare
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Child Welfare
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Community Development
                    </MenuItem>
                  </Select>
                </FormControl>
                        <br/><br/>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Country
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Country
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      United States
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Bucharest
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Argentina
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Angola
                    </MenuItem>
                  </Select>
                </FormControl>
                        <br/><br/>
                  </GridItem>
                  
                  <GridItem xs={12} sm={12} md={12}>
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
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Phone"
                      id="contact"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onContactChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Button color="rose" onClick={()=>{
                    this.onButtonPress()
                    }}>
                    {this.props.text}
                  </Button>
                </GridItem>
                </GridContainer>
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
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onFirstNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Title"
                      id="title"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onFirstNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Organization"
                      id="organization"
                      formControlProps={{
                        fullWidth: true,
                        onChange: e => {
                          this.onFirstNameChange(e.target.value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
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
    contact: state.user.contact,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    city: state.user.city,
    country: state.user.country,
    postalCode: state.user.postalCode,
    description: state.user.description,
    text: state.user.text,
    showToast: state.reg.showToast,
  }
}

export default connect(mapStateToProps, {
  textChanged,
  updateProfile,
  contactChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  cityChanged,
  countryChanged,
  postalCodeChanged,
  descriptionChanged,
  registerToast
})(withStyles(userProfileStyles)(UserProfile));
