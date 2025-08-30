import { useParams } from "react-router-dom";
import { essentialsData, EssentialType, Store } from "../../essentialsData";
import Essentials from "../../components/commonComponents/essentials/Essentials";

const EssentialsPage = () => {
  const { city, type } = useParams<{ city?: string; type?: string }>();

  // ✅ Type guard for essential type
  const isEssentialType = (t: string | undefined): t is EssentialType =>
    ["food", "hospitals", "petrolpumps"].includes(t ?? "");

  // ✅ Fetch stores safely
  const stores: Store[] =
    city && type && isEssentialType(type)
      ? essentialsData[city]?.[type] ?? []
      : [];

  // ✅ Human-friendly title
  const title =
    city && type && isEssentialType(type)
      ? `${city} - ${type.charAt(0).toUpperCase() + type.slice(1)}`
      : "Essentials";

  return <Essentials title={title} stores={stores} />;
};

export default EssentialsPage;
