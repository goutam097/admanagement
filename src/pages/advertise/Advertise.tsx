
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { campaignAPI, campaignDeleteAPI, campaignUpdateAPI } from "../../apis/campaign";
import { adSetAPI, adSetDeleteAPI, adSetUpadteAPI } from "../../apis/adSet";
import { adAPI, adDeleteAPI, adUpdateAPI } from "../../apis/ads";

const tabRoutes: Record<string, string> = {
  campaign: "/campaign",
  adSet: "/adset",
  ad: "/ad",
};

const Advertise = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('campaign')
  const [loading, setLoading] = useState(false);
  const [advertiseData, setAdvertiseData] = useState([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleTab = async (activeTab: string) => {
    setTab(activeTab)
  }

  const checkStatus = (status: string) => {
    if (status === "draft") return { label: "Not delivering", reason: "Draft" };
    if (status === "paused") return { label: "Paused", reason: "" };
    if (status === "ended" || status === "completed")
      return { label: "Ended", reason: "" };

    return { label: status, reason: "" }; // fallback
  };

  const handleCreateClick = () => {
    const route = tabRoutes[tab];
    if (route) {
      navigate(route);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      let response;

      if (tab === "campaign") {
        response = await campaignAPI();
      } else if (tab === "adSet") {
        response = await adSetAPI();
      } else if (tab === "ad") {
        response = await adAPI();
      }
      setAdvertiseData(response)
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [tab])

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "paused" : "active";

    setAdvertiseData((prev: any) =>
      prev.map((item: any) =>
        item._id === id ? { ...item, status: newStatus } : item
      )
    );

    try {
      if (tab === "campaign") {
        await campaignUpdateAPI(id, { status: newStatus });
      } else if (tab === "adSet") {
        await adSetUpadteAPI(id, { status: newStatus });
      } else {
        await adUpdateAPI(id, { status: newStatus });
      }
    } catch (err) {
      console.error(err);

      setAdvertiseData((prev: any) =>
        prev.map((item: any) =>
          item._id === id ? { ...item, status: currentStatus } : item
        )
      );
    }
  };

  const handleSelect = (id: string) => {
    setSelectedId((prev) => {
      const updated = prev === id ? null : id;
      return updated;
    });
  };

  const handleDelete = async () => {
    if (!selectedId) {
      console.warn("No item selected");
      return;
    }

    try {
      if (tab === "campaign") {
        await campaignDeleteAPI(selectedId);
      } else if (tab === "adSet") {
        await adSetDeleteAPI(selectedId);
      } else {
        await adDeleteAPI(selectedId);
      }

      fetchData();
      setSelectedId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleViewPage = async (id: string) => {
    if (tab === 'campaign') {
      navigate(`/campaign/view/${id}`)
    } else if (tab === 'adSet') {
      navigate(`/adset/view/${id}`)
    } else {
      navigate(`/ad/view/${id}`)
    }
  }
  
  const handleAdd = async (id: string) => {
    if(tab === 'campaign'){
      navigate(`/adset/${id}`)
    }else if (tab === 'adSet') {
      navigate(`/ad/${id}`)
    }
  }

  return (
    <>
      <div>
        <div className="border-b border-gray-200 cursor-pointer">
          <nav className="-mb-px flex space-x-6 ">
            <a onClick={() => handleTab('campaign')} className={`pb-2 text-sm ${tab === 'campaign' ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>Campaigns 2 total</a>
            <a onClick={() => handleTab('adSet')} className={`pb-2 text-sm ${tab === 'adSet' ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>Ad sets 4 total</a>
            <a onClick={() => handleTab('ad')} className={`pb-2 text-sm ${tab === 'ad' ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}>Ads 4 total</a>
          </nav>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 sm:py-6">
          <div className="space-y-6">
            <div className="flex gap-2 items-center">
              <button type="button" onClick={handleCreateClick} className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">
                Create {tab === "campaign"
                  ? "Campaign"
                  : tab === "adSet"
                    ? "Ad Set"
                    : "Ad"}
              </button>
              <div className="flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10 px-4 w-full"
                onClick={handleDelete}>
                <i className="fa-regular fa-trash"></i>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
              <div className="max-w-full overflow-x-auto">
                <table className="min-w-full  undefined">
                  <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                    <tr>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">
                        <label className="flex items-center space-x-3 group cursor-pointer ">
                          {/* <div className="relative w-5 h-5">
                            <input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 " type="checkbox" />
                          </div> */}
                        </label>

                      </th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Campaign name</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">off / on</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Action</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Spend</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Impression</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Clicks</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Conversions</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Cost per Conversions</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Leads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">

                    {
                      advertiseData?.map((item: any, index: any) => {
                        return (
                          <tr key={item?._id}>
                            <td className=" px-5 py-4 sm:px-6 text-start whitespace-nowrap">
                              <label className="flex items-center space-x-3 group cursor-pointer ">
                                <div className="relative w-5 h-5">
                                  <input type="checkbox"
                                    checked={selectedId === item?._id}
                                    onChange={() => handleSelect(item?._id)} className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 " />
                                </div>
                              </label>
                            </td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item?.name}</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={item?.status === "active"}
                                  onChange={() => handleToggleStatus(item?._id, item?.status)} className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full">
                                </div>
                              </label>

                            </td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{checkStatus(item?.status)?.label}</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              <div className="flex gap-3">
                                <button type="button" onClick={() => handleViewPage(item?._id)} className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">View</button>
                                {(tab === "campaign" || tab === "adSet") && (
                                <button type="button" onClick={() => handleAdd(item?._id)} className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">
                                   {tab === "campaign" ? "Add set" : "Add Ad"}
                                </button>
                                )}
                              </div>
                            </td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                            <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">N/A</td>
                          </tr>
                        )
                      })
                    }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Advertise
