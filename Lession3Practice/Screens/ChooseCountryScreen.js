import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SignInScreenStyles from './SignInScreenStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import ChooseCountryScreenStyles from './ChooseCountryScreenStyles';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const countries = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
];

const gender = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];

const countries2 = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
];

export default function ChooseCountryScreen({navigation}) {
  const refInfor = useRef();

  const [isEdit, setIsEdit] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState('Male');
  const [items2, setItems2] = useState(gender);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState('Viet Nam');
  const listCountries3 = countries2.map(item => ({
    label: item.name,
    value: item.name,
  }));
  const [items3, setItems3] = useState(listCountries3);

  const [firstName, setFirstName] = useState('Itoh');
  const [lastName, setLastName] = useState('John');
  const [email, setEmail] = useState('Example@gmail.com');

  useEffect(() => {
    AsyncStorage.getItem('nowAccount')
      .then(acc => {
        refInfor.current = JSON.parse(acc);
        return AsyncStorage.getItem('personalInfor');
      })
      .then(acc2 => {
        const listInfor = JSON.parse(acc2);
        let index = listInfor.findIndex(
          item => item.username === refInfor.current.username,
        );
        console.log(index)
        if (index !== -1) {
          const {firstname, lastName, dob, gender, email, location} =
          listInfor[index];
          setFirstName(firstname);
          setLastName(lastName);
          setEmail(email);
          setValue3(location);
          setDate(new Date(dob));
          setValue2(gender);
        } else {
          setFirstName('');
          setLastName('');
          setEmail('');
          setValue3('');
          setDate(new Date());
          setValue2('');
        }
      });
  }, []);

  const handleEditProfile = () => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setDate(date);
    setValue2(value2);
    setValue3(value3);
    AsyncStorage.getItem('nowAccount').then(acc => {
      const nowUserList = JSON.parse(acc);
      const infor = {
        username: nowUserList.username,
        firstname: firstName,
        lastName: lastName,
        email: email,
        dob: date.toLocaleDateString(),
        gender: value2,
        location: value3,
      };
      AsyncStorage.getItem('personalInfor').then(acc => {
        const listInfor = JSON.parse(acc);
        const check = listInfor.some((item, index) => {
          if (item.username === nowUserList.username) {
            listInfor[index] = infor;
            return true;
          }
          return false;
        });
        if (check) {
          AsyncStorage.setItem('personalInfor', JSON.stringify(listInfor));
        }
      });
    });
    setIsEdit(!isEdit);
  };

  return (
    <View style={ChooseCountryScreenStyles.container}>
      <View style={ChooseCountryScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={ChooseCountryScreenStyles.headerContent}>My Profile</Text>
      </View>
      <View style={ChooseCountryScreenStyles.avatarContainer}>
        <Image
          style={ChooseCountryScreenStyles.avatar}
          source={require('../Components/Images/ProfileImage.png')}
        />
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>First Name</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <TextInput
              placeholder="Your first name"
              value={firstName}
              onChangeText={value => setFirstName(value)}
            />
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>{firstName}</Text>
          )}
        </View>
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>Last Name</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <TextInput
              placeholder="Your last name"
              value={lastName}
              onChangeText={value => setLastName(value)}
            />
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>{lastName}</Text>
          )}
        </View>
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>Birthday</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <View>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <View style={ChooseCountryScreenStyles.datePicker}>
                  <Text>{date.toLocaleDateString()}</Text>
                </View>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>
              {date.toLocaleDateString()}
            </Text>
          )}
        </View>
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>Gender</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={ChooseCountryScreenStyles.dropDownMenu}
              placeholder="Select your gender"
            />
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>{value2}</Text>
          )}
        </View>
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>Email</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <TextInput
              placeholder="Example@gmail.com"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>{email}</Text>
          )}
        </View>
      </View>
      <View style={ChooseCountryScreenStyles.contentContainer}>
        <View style={ChooseCountryScreenStyles.subContainer01}>
          <Text style={ChooseCountryScreenStyles.content01}>Location</Text>
        </View>
        <View style={ChooseCountryScreenStyles.subContainer02}>
          {isEdit ? (
            <DropDownPicker
              open={open3}
              value={value3}
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              style={ChooseCountryScreenStyles.dropDownMenu}
              placeholder="Select your location"
            />
          ) : (
            <Text style={ChooseCountryScreenStyles.content02}>{value3}</Text>
          )}
        </View>
      </View>
      {isEdit ? (
        <TouchableOpacity
          onPress={() => handleEditProfile()}
          style={ChooseCountryScreenStyles.buttonContainer}>
          <View style={ChooseCountryScreenStyles.orderButton}>
            <Text style={ChooseCountryScreenStyles.orderButtonContent}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setIsEdit(!isEdit)}
          style={ChooseCountryScreenStyles.buttonContainer}>
          <View style={ChooseCountryScreenStyles.orderButton}>
            <Text style={ChooseCountryScreenStyles.orderButtonContent}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
