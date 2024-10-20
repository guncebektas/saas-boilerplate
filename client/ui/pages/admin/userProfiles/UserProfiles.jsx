import React, {useState} from 'react';
import {H2} from "../../../components/heading/Headings.jsx";
import {useTracker} from "meteor/react-meteor-data";
import {USER_PROFILE_PUBLICATION} from "../../../../../imports/modules/app/user/userProfiles/enums/publication";
import {userProfileRepository} from "../../../../../imports/modules/app/user/userProfiles/userProfileRepository";
import DataGrid from '../../../components/dataGrid/DataGrid'; // Import the new DataGrid component
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {ChangePasswordModal} from "./ChangePasswordModal";

export const UserProfiles = () => {
  const [openChangePasswordModalModal, setOpenChangePasswordModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const columns = [
    {key: 'email', label: 'Email'},
    {key: 'firstname', label: 'First name'},
    {key: 'lastname', label: 'Last name'},
    {key: 'gender', label: 'Gender'},
    {key: 'phone', label: 'Phone number'},
  ];

  // Track items and loading state
  const {items, loading} = useTracker(() => {
    const handle = Meteor.subscribe(USER_PROFILE_PUBLICATION.PROFILES, columns);

    return {
      loading: !handle.ready(),
      items: handle.ready() ? userProfileRepository.find().fetch() : []
    };
  });

  const handleEdit = async (_id) => {
    setSelectedUserId(_id);
    setOpenChangePasswordModal(true);
    // await contactRequestRemove({_id});
  };

  const actions = [
    {
      label: 'Password',
      icon: () => <FontAwesomeIcon icon={faEdit}/>,
      classes: 'bg-blue-500 hover:bg-blue-600',
      onClick: handleEdit,
    }
  ];

  return (
    <>
      <H2 text="User profiles" showBackButton={true}></H2>
      <DataGrid
        columns={columns}
        data={items}
        loading={loading}
        actions={actions}
      />

      <ChangePasswordModal userId={selectedUserId} isOpen={openChangePasswordModalModal} onClose={() => setOpenChangePasswordModal(false)}/>
    </>
  );
};
