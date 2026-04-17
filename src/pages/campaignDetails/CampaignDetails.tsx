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
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3'>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Name</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'>Goutam Sing</span>
            </div>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Status</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'>Paused</span>
            </div>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Budget type</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'></span>
            </div>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Budget</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'>$200</span>
            </div>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Schedule</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'>Continuous</span>
            </div>
            <div className='rounded-2xl border border-gray-100 bg-white py-4 pl-4 pr-4 dark:border-gray-800 dark:bg-white/[0.03] xl:pr-5'>
              <h4 className='mb-1 text-sm font-medium text-gray-800 dark:text-white/90'>Ad Sets</h4>
              <span className='block text-sm text-gray-500 dark:text-gray-400'>2 total</span>
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