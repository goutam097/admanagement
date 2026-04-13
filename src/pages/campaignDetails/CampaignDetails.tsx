import React from 'react'

const CampaignDetails = () => {
  return (
    <>
        <div className='rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 mb-6'>
                <div className="space-y-6">
                    <div className="flex gap-2 items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Campaign Details</h3>
                        <div className='flex gap-3'>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-red-600 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-red-600 "> Delete</button>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 "> Change Campaign</button>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
              <div className="max-w-full overflow-x-auto">
                <table className="min-w-full  undefined">
                  <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                    <tr>
                      
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Name</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Budget Type</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Budget</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Schedule</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">Ad Sets</th>
                      <th className=" px-5 py-3 font-medium whitespace-nowrap text-gray-500 text-start text-theme-xs dark:text-gray-400">  &nbsp; </th>
                      
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    <tr>
                      
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">facebook</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Daily</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Daily</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Daily</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">Daily</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">$50</td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400"> &nbsp; </td>
                      
                    </tr>
                    

                  </tbody>
                </table>
              </div>
            </div>
                </div>
            </div>

            <div className='rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 mb-6'>
                <div className="space-y-6">
                    <div className="flex gap-2 items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Ad Sets</h3>
                        <div className='flex gap-3'>
                        
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 "> Search</button>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
              <div className="max-w-full overflow-x-auto">
                <table className="min-w-full  undefined">
                  
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    <tr>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <strong>demo</strong>
                        <div>Daily: $65 from 13-04-2026</div>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 text-right">Active</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <strong>demo</strong>
                        <div>Daily: $65 from 13-04-2026</div>
                      </td>
                      <td className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 text-right">Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
                </div>
            </div>
    </>
  )
}

export default CampaignDetails