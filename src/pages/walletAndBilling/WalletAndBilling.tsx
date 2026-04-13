
const WalletAndBilling = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">

            <div className="flex items-center justify-between">
              <div>

                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">3,782</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">Customers</span>
              </div>
              <div className="flex gap-3">
                <button class="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Add money to wallet</button>
                <button class="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">View KYC</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Pending</span>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">3,782</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">For recent top-ups (setting)</span>
              </div>
              <div className="flex gap-3">


              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Last payment</span>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">0</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">You haven't made any payments yet</span>
              </div>
              <div className="flex gap-3">

              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="rounded-xl border p-4 border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15">
          <div className="flex items-start gap-3">
            <div className="-mt-0.5 text-warning-500">
              <svg className="fill-current" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z" fill />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">Warning Message</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Be cautious when performing this action.</p>
            </div>
            <button className="inline-flex ms-auto items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Add money</button>
          </div>
        </div>

        </div>
         <div className="col-span-12">
          <div className="flex gap-3">
          <button className="inline-flex ms-auto items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300">Summary</button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ">Payment history</button>
          </div>
         </div>
         <div className="col-span-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">

            <div className="flex items-center justify-between">
              <div>
                <h5 className="mt-0 font-medium text-gray-800 dark:text-white/90">Recent transactions</h5>
              </div>
              <div className="flex gap-3">
               <a className="inline-flex text-sm text-brand-500 hover:text-brand-600">View all</a>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Be cautious when performing this action.</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default WalletAndBilling
