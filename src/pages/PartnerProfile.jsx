import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import FormSkeleton from "../components/skeleton/FormSkeleton";
import PartnerProfileForm from "../components/PartnerProfileForm";
import ProfileData from "./ProfileData";

const PartnerProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [exists, setExists] = useState(false);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (loading) return;
    if (!user?.email) {
      setExists(null);
      return;
    }
    axios
      .get(`http://localhost:3000/study-partners/check/${user.email}`)
      .then(
        res => {
            if (res) {
                setExists(true)
                setProfile(res)
            }
            else setExists(false)
        }
    )
      .catch(() => setExists(false));
  }, [loading, user?.email]);

  if (loading) return <FormSkeleton />;
  if (!user) return
  if (exists === null) return <FormSkeleton />;
  return exists ? <ProfileData profile={profile}/> : <PartnerProfileForm />;
};

export default PartnerProfile;
