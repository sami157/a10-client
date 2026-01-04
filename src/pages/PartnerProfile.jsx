import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import FormSkeleton from "../components/skeleton/FormSkeleton";
import PartnerProfileForm from "../components/PartnerProfileForm";
import ProfileData from "./ProfileData";

const PartnerProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [partner, setPartner] = useState(null); 
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!user?.email) {
      setPartner(null);
      setChecking(false);
      return;
    }

    setChecking(true);
    axios
      .get(`https://a10-server-seven.vercel.app/study-partners/check/${user.email}`)
      .then(({ data }) => {
        setPartner(data || null);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setChecking(false));
  }, [loading, user?.email]);

  if (loading || checking) return <FormSkeleton />;
  if (!user?.email) return <p>Please sign in.</p>;
  if (error) return <p>Something went wrong.</p>;

  const exists = !!partner;

  return exists ? <ProfileData profile={partner} /> : <PartnerProfileForm />
};

export default PartnerProfile;
