import { Fragment, useEffect, useState } from "react";
import api from "../../Utils/api";

export default function CastsItems() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  async function getCastApi() {
    const response = await api.get();
  }
  function renderFarm() {}
  return (
    <Fragment>
      <div>cast</div>
    </Fragment>
  );
}
