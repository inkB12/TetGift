import ContactHero from "../components/ContactHero";
import ContactInfoMap from "../components/ContactInfoMap";
import ContactSocialForm from "../components/ContactSocialForm";

export default function ContactPage() {
  return (
    <main className="bg-[#FBF5E8]/30">
      <ContactHero />
      <ContactInfoMap />
      <ContactSocialForm />
    </main>
  );
}
