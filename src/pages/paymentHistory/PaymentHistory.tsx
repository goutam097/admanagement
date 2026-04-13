import React from 'react'

export const PaymentHistory = () => {
    return (
        <>
            <div className='rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6'>
                <div className="space-y-6">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Payment History</h3>
                        <div className='ms-auto'>
                            <div className="relative">
                                <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                    <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                    <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                    <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                    <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                                </select>

                            </div>
                        </div>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 "><i className="fa-regular fa-download"></i> Download All</button>

                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2">
                        <div className="relative">
                            <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                            </select>

                        </div>
                        <div className="relative">
                            <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                <option value="" disabled="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Select Option</option>
                                <option value="marketing" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Marketing</option>
                                <option value="template" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Template</option>
                                <option value="development" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Development</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
