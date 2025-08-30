import { useParams } from "react-router-dom";
import { essentialsData, EssentialType, Store } from "../../essentialsData";
import Essentials from "../../components/commonComponents/essentials/Essentials";

const EssentialsPage = () => {
  const { city, type } = useParams();

  // Type guard for essential type
  const isEssentialType = (t: string | undefined): t is EssentialType =>
    t === "food" || t === "hospitals" || t === "petrolpumps";

  let stores: Store[] = [];
  if (city && type && isEssentialType(type)) {
    stores = essentialsData[city]?.[type] ?? [];
  }

  const title =
    city && type
      ? `${city} - ${type.charAt(0).toUpperCase() + type.slice(1)}`
      : "Essentials";

  return <Essentials title={title} stores={stores} />;
};

export default EssentialsPage;