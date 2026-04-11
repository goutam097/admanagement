
import user from "../../assets/images/owner.png"

const Advertise = () => {
  return (
    <>
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6">
            <a href="#tab1" className="text-blue-600 border-b-2 border-blue-600 pb-2 text-sm ">Campaigns 2 total</a>
            <a href="#tab2" className="text-gray-500 hover:text-gray-700 pb-2 text-sm">Ad sets 4 total</a>
            <a href="#tab3" className="text-gray-500 hover:text-gray-700 pb-2 text-sm">Ads sets 4 total</a>
          </nav>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 sm:py-6">
          <div className="space-y-6">
            <div className="flex gap-2 items-center">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Create Campaign</button>
            <div className="flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10 px-4 w-full">
              <i className="fa-regular fa-trash"></i>
            </div>            
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
              <div className="max-w-full overflow-x-auto">
                <table className="min-w-full  undefined">
                  <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                    <tr>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">
                        <label className="flex items-center space-x-3 group cursor-pointer "><div className="relative w-5 h-5"><input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          " type="checkbox" /></div></label>

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
                    <tr>
                      <td className=" px-5 py-4 sm:px-6 text-start whitespace-nowrap">
                        <label className="flex items-center space-x-3 group cursor-pointer "><div className="relative w-5 h-5"><input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          " type="checkbox" /></div></label>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Name</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none
                      rounded-full peer peer-checked:bg-blue-600
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-white after:h-5 after:w-5 after:rounded-full
                      after:transition-all peer-checked:after:translate-x-full">
                          </div>
                        </label>

                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Agency Website</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex gap-3">
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">View</button>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Add set</button>
                        </div>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                    </tr>
                    <tr>
                      <td className=" px-5 py-4 sm:px-6 text-start whitespace-nowrap">
                        <label className="flex items-center space-x-3 group cursor-pointer "><div className="relative w-5 h-5"><input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          " type="checkbox" /></div></label>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Name</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none
                      rounded-full peer peer-checked:bg-blue-600
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-white after:h-5 after:w-5 after:rounded-full
                      after:transition-all peer-checked:after:translate-x-full">
                          </div>
                        </label>

                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Agency Website</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex gap-3">
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">View</button>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Add set</button>
                        </div>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                    </tr>
                    <tr>
                      <td className=" px-5 py-4 sm:px-6 text-start whitespace-nowrap">
                        <label className="flex items-center space-x-3 group cursor-pointer "><div className="relative w-5 h-5"><input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          " type="checkbox" /></div></label>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Name</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none
                      rounded-full peer peer-checked:bg-blue-600
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-white after:h-5 after:w-5 after:rounded-full
                      after:transition-all peer-checked:after:translate-x-full">
                          </div>
                        </label>

                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Agency Website</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex gap-3">
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">View</button>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-1 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Add set</button>
                        </div>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">0</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] mb-6">
                        <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
                            <div className="mb-3">
                                <div><label for="" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Campaign name
                                </label>
                                    <div className="relative">
                                        <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" /></div></div>
                            </div>
                            <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Select your objective</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Pick the business outcome you want this ad set to drive</p>
                            
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 mt-3">
                                    <div className="text-center">
                                      <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10 mx-auto"><i className="fa-regular fa-volume"></i>
                                      </div>
                                        <h4 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Brand awareness</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Reach more people with your message</p><a className="inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                                        href="/" data-discover="true">Read more</a></div>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 mt-3">
                                    <div className="text-center">
                                      <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10 mx-auto"><i className="fa-regular fa-volume"></i>
                                      </div>
                                        <h4 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Brand awareness</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Reach more people with your message</p><a className="inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                                        href="/" data-discover="true">Read more</a></div>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 mt-3">
                                    <div className="text-center">
                                      <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10 mx-auto"><i className="fa-regular fa-volume"></i>
                                      </div>
                                        <h4 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Brand awareness</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Reach more people with your message</p><a className="inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                                        href="/" data-discover="true">Read more</a></div>
                                </div>
                            </div>
                            <div className="w-full h-px my-6 bg-gray-200 dark:bg-gray-800"></div>
                            <div className="flex items-center justify-between">
                              <p>Not ready for a campaign?<a className="font-semibold text-brand-500"> Create later </a></p>
                              <a className="inline-flex items-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                                        href="/" data-discover="true">Create campaign</a>
                            </div>
                        </div>
                    </div>
      </div>

    </>
  )
}

export default Advertise
