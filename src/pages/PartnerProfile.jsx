import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import PartnerProfileForm from '../components/PartnerProfileForm';

const PartnerProfile = () => {
    const {user} = use(AuthContext)
    return (
        <PartnerProfileForm></PartnerProfileForm>
    );
};

export default PartnerProfile;