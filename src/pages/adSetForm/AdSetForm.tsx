import { useEffect, useState } from "react";
import Audience from "../../components/audience/Audience"
import Duration from "../../components/duration/Duration"
import { campaignAPI } from "../../apis/campaign";
import { toast } from "react-toastify";

const AdSetForm = () => {
  const [loading, setLoading] = useState(false);
  const [campaignList, setCampaignList] = useState([])
  const [selectedCampaign, setSelectedCampaign] = useState("")
  const [adSetName, setAdSetName] = useState("")
  const [audienceData, setAudienceData] = useState<any>({});
  const [durationData, setDurationData] = useState<any>({});
  console.log(campaignList, 'durationData');
  console.log(selectedCampaign, 'selectedCampaign');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await campaignAPI();
      setCampaignList(response)
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = () => {
    if(!selectedCampaign) return toast.error('campain is required')
    if(!adSetName) return toast.error('campain is required')
    const payload = {
      campaign_id: selectedCampaign,
      name: adSetName,

      // Duration
      budget: durationData?.budget || 0,
      schedule_start: durationData?.startDate
        ? new Date(durationData.startDate).toISOString()
        : null,
      schedule_end:
        durationData?.runType === "range" && durationData?.endDate
          ? new Date(durationData.endDate).toISOString()
          : null,

      // Targeting
      targeting: {
        age: {
          min: audienceData?.startAge || null,
          max: audienceData?.endAge || null,
        },

        gender:
          audienceData?.gender === "all"
            ? []
            : [audienceData?.gender],

        membership_type: audienceData?.profileTypeId
          ? [audienceData.profileTypeId]
          : [],

        location: [
          {
            address: audienceData?.location?.address || "",
            city: audienceData?.location?.city || "",
            state: audienceData?.location?.state || "",
            country: audienceData?.location?.country || "",
            latitude: audienceData?.location?.latitude || null,
            longitude: audienceData?.location?.longitude || null,
            radius: audienceData?.distance || 0,
          },
        ],

        demographics: {
          education: [],
          relationship_status: [],
          income_range: {
            min: null,
            max: null,
          },
          occupation: [],
        },

        custom_audience: {
          include: [],
          exclude: [],
        },

        device: [],
        interest: [],
        behavior: [],
      },
    };

    console.log("FINAL PAYLOAD:", payload);
  };

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] mb-6">
        <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
          <div className="mb-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Campaign <span className="text-red-600">*</span></label>
              <div className="relative">
                <select value={selectedCampaign} onChange={(e) => setSelectedCampaign(e.target.value)} className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                  <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Campaign</option>
                  {
                    campaignList?.map((item: any) => {
                      return <option key={item?._id} value={item?._id} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">{item?.name}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Ad set name <span className="text-red-600">*</span></label>
              <div className="relative">
                <input value={adSetName} onChange={(e) => setAdSetName(e.target.value)} className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
            <Audience onChange={setAudienceData} />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
            <Duration onChange={setDurationData} />

          </div>


          <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>


          <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
          <div className="flex items-center justify-between">
            <a onClick={handleSubmit} className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
              data-discover="true">Create Ad Set</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdSetForm
