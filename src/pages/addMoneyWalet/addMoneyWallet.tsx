import React from 'react'

const AddMoneyWallet = () => {
    return (
        <>
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
                <div className="px-6 py-5">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">Add to money wallet</h3></div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                    <div className="mb-3">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Amount ($)</label>
                            <div className="relative">
                                <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mb-3'>
                        <button className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
                            $ 200
                        </button>
                        <button className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
                            $ 200
                        </button>
                        <button className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
                            $ 200
                        </button>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Billing address
                            <small className='block'>Saved billing address</small>
                        </label>
                        <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900"
                        >
                            <option value="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select an option</option>
                            <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                            <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                            <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Full name</label>
                        <div className="relative">
                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                type="text" />
                        </div>

                    </div>
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Address line 1</label>
                        <div className="relative">
                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                type="text" />
                        </div>

                    </div>
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Address line 2 (optional)</label>
                        <div className="relative">
                            <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                type="text" />
                        </div>

                    </div>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'>
                        <div className="mb-3">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">City</label>
                            <div className="relative">
                                <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="text" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">State</label>
                            <div className="relative">
                                <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="text" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Postal code</label>
                            <div className="relative">
                                <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="text" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Country</label>
                            <div className="relative">
                                <input id="" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="text" />
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                                <input className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          " type="checkbox" />
                            </div>
                        </label><span className="block text-sm font-medium text-gray-700 dark:text-gray-400">Save this billing address for next time</span></div>

                        <div className="flex gap-3">
                            <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300">Cancel</button>
                            <button className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300" >Add to wallet</button>
                        </div>




                </div>
            </div>
        </>
    )
}

export default AddMoneyWallet