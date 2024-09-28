import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ToastSuccess, ToastWarning } from '../../components/alert/Toast';
import { profileUpdate } from '../../../../imports/modules/userProfiles/userProfile.methods';
import { userProfileRepository } from '../../../../imports/modules/userProfiles/userProfileRepository';
import { USER_PROFILE_PUBLICATION } from '../../../../imports/modules/userProfiles/enums/publication';
import { useTranslator } from "../../providers/i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import SubmitButton from "../../components/buttons/SubmitButton"; // Import spinner icon

export const ProfileDetails = () => {
  const t = useTranslator();
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const user = useTracker(() => Meteor.user(), []);

  useTracker(() => {
    const subscription = Meteor.subscribe(USER_PROFILE_PUBLICATION.ME);
    if (subscription.ready()) {
      const userProfile = userProfileRepository.findOne({ _id: Meteor.userId() }) || {};
      const email = user?.emails?.[0]?.address || '';
      setFormData({
        email,
        firstname: userProfile.firstname || '',
        lastname: userProfile.lastname || '',
        phoneNumber: userProfile.phoneNumber || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    await profileUpdate({
      firstname: formData.firstname,
      lastname: formData.lastname,
      phoneNumber: Number(formData.phoneNumber)
    })
      .then(response => {
        console.log(response);
        // ToastSuccess();
      })
      .catch(error => {
        console.log(error);
        // ToastWarning();
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email" value={t('Email')}/>
        <TextInput id="email" type="text" value={formData.email} disabled/>
      </div>
      <div>
        <Label htmlFor="firstname" value={t('Firstname')}/>
        <TextInput id="firstname" type="text" value={formData.firstname} onChange={handleChange}/>
      </div>
      <div>
        <Label htmlFor="lastname" value={t('Lastname')}/>
        <TextInput id="lastname" type="text" value={formData.lastname} onChange={handleChange}/>
      </div>
      <div>
        <Label htmlFor="phoneNumber" value={t('Phone number')}/>
        <TextInput id="phoneNumber" type="number" value={formData.phoneNumber} onChange={handleChange}/>
      </div>
      <SubmitButton
        isLoading={loading}
        text={{ default: t('Save'), loading: t('Loading...') }} // Pass loading and default text
      />
    </form>
  );
};
