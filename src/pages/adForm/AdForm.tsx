import { useEffect, useState } from "react";
import Placement from "../../components/placement/Placement";
import { adSetAPI } from "../../apis/adSet";
import AdCreative from "../../components/adCreative/AdCreative";

const AdForm = () => {
  const [loading, setLoading] = useState(false);
  const [adSetList, setAdSetList] = useState([])
  const [selectedAdSet, setSelectedAdSet] = useState("")
  const [adSetName, setAdSetName] = useState("")
  const [audienceData, setAudienceData] = useState<any>({});
  const [durationData, setDurationData] = useState<any>({});
   const [placements, setPlacements] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await adSetAPI();
      setAdSetList(response)
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])


  const [adCreative, setAdCreative] = useState<any>({
    headline: "",
    description: "",
    ad_format: "image",
    button: "",
    website_url: ""
  });

  console.log(placements,'-------');
  



  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] mb-6">
        <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
          <div className="mb-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Ad set <span className="text-red-600">*</span></label>
              <div className="relative">
                <select value={selectedAdSet} onChange={(e) => setSelectedAdSet(e.target.value)} className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                  <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Ad Set</option>
                  {
                    adSetList?.map((item: any) => {
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
            <AdCreative adCreative={adCreative} setAdCreative={setAdCreative}/>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
            <Placement onChange={setPlacements} />
          </div>

          <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>


          <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
          <div className="flex items-center justify-between">
            <a className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
              data-discover="true">Create Ad</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdForm
