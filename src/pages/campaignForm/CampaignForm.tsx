import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { campaignCreateAPI } from "../../apis/campaign";

const CampaignForm = () => {
    const navigate = useNavigate();
    const objective = [
        {
            title: "Brand Awareness",
            description: "Reach more people with your message.",
            type: "brand_awareness",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 10v4c0 1.1.9 2 2 2h2l6 4V4l-6 4H6c-1.1 0-2 .9-2 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M17 9a4 4 0 0 1 0 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg>)
        },
        {
            title: "Website visits",
            description: "Get more clicks to your landing page.",
            type: "traffic",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.6"></rect><path d="M8 15v-3m4 3V9m4 6v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg>)
        },
        {
            title: "Lead generation",
            description: "Collect inquiries from interested people.",
            type: "leads",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.6"></circle><path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>)
        },
        {
            title: "Engagement",
            description: "Increase reactions, follows and visits.",
            type: "engagement",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6.5-7 11-7 11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path></svg>)
        },
        {
            title: "Website conversions",
            description: "Capture leads or drive actions on your site.",
            type: "conversions",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.6"></circle><path d="M12 12l4-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M12 3v3m0 12v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg>)
        },
        {
            title: "Video views",
            description: "Share your videos with more people.",
            type: "video",
            icon: (<svg width="22" height="22" fill="none" aria-hidden="true" viewBox="0 0 24 24"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.6"></rect><path d="M22 8l-6 4 6 4V8z" fill="currentColor"></path></svg>)
        },
    ]
    const [selectedObjective, setSelectedObjective] = useState(objective[0].type);
    const [campaignName, setCampaignName] = useState("")

    const handleSubmit = async () => {
        if (!campaignName) return toast.warn('Campaign name required')
        let jData = {
            name: campaignName,
            objective: selectedObjective
        }
        const result = await campaignCreateAPI(jData)
        setCampaignName('')
        navigate('/adset')
    }
    return (
        <>
            <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] mb-6">
                <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
                    <div className="mb-3">
                        <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Campaign name <span className="text-red-600">*</span>
                        </label>
                            <div className="relative">
                                <input value={campaignName} onChange={(e) => setCampaignName(e.target.value)} className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                    </div>
                    <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Select your objective</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Pick the business outcome you want this ad set to drive</p>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {objective.map((item) => {
                            const isActive = selectedObjective === item.type;

                            return (
                                <div
                                    key={item.type}
                                    onClick={() => setSelectedObjective(item.type)}
                                    className={`rounded-xl border p-5 cursor-pointer transition relative
                                            ${isActive
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-200 bg-white"
                                        }
                                        `}
                                >
                                    {isActive && (
                                        <div className="absolute top-2 right-2 text-green-600 text-lg">
                                            ✔
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 text-brand-500 mx-auto">
                                            {item.icon}
                                        </div>

                                        <h4 className="mb-1 font-medium text-gray-800">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
                    <div className="flex items-center justify-between">
                        <p>Not ready for a campaign?<a className="font-semibold text-brand-500 cursor-pointer" onClick={() => navigate(-1)}> Create later </a></p>
                        <a onClick={handleSubmit} className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                            data-discover="true">Create campaign</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampaignForm
