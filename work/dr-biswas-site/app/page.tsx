import { PremiumDoctorSite } from "@/components/premium-doctor-site";
import { doctorStructuredData } from "@/constants/site";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorStructuredData) }}
      />
      <PremiumDoctorSite />
    </>
  );
}
