import { useEffect, useState } from "react";
import { budgetAPI } from "../../apis/budget";
import { calculateNumberInK } from "../../utils/CalculateInK";


type DurationProps = {
    onChange: (data: any) => void;
};

const Duration = ({ onChange }: DurationProps) => {
    const [loading, setLoading] = useState(false);
    const [budgetData, setBudgetData] = useState<any | null>(null);
    const [runType, setRunType] = useState<"continuous" | "range">("continuous");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [budget, setBudget] = useState(0);

    const today = new Date().toISOString().split("T")[0];

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await budgetAPI();
            const activeItem = response?.find((item: any) => item.activeStatus === true);

            setBudgetData(activeItem || null);
        } catch (err: any) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    //  Handle continuous mode
    useEffect(() => {
        if (runType === "continuous") {
            setStartDate(today);
            setEndDate("");
        }
    }, [runType]);

    //  Budget + Impression Calculation
    const minImpPerDollar = Number(
        budgetData?.no_of_impression_per_dollar_minimum || 0
    );
    const maxImpPerDollar = Number(
        budgetData?.no_of_impression_per_dollar_maximum || 0
    );

    const minImpressions = budget * minImpPerDollar;
    const maxImpressions = budget * maxImpPerDollar;

    useEffect(() => {
        if (budgetData) {
            setBudget(Number(budgetData.minimum_budget)); 
        }
    }, [budgetData]);

    useEffect(() => {
        onChange({
            runType,
            startDate,
            endDate,
            budget,
        });
    }, [runType, startDate, endDate, budget]);


    return (
        <>
            {/*  Header */}
            <div className="px-6 py-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    Duration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Who should see your ad?
                </p>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">

                {/*  Radio Section */}
                <div className="mb-4">

                    {/* Continuous */}
                    <div className="mb-3">
                        <label className="flex gap-3 cursor-pointer">
                            <input
                                type="radio"
                                checked={runType === "continuous"}
                                onChange={() => setRunType("continuous")}
                            />
                            <div>
                                <h4>Run this ad continuously</h4>
                                <small>
                                    Your ad will run daily until you pause it
                                </small>
                            </div>
                        </label>
                    </div>

                    {/* Date Range */}
                    <div className="mb-3">
                        <label className="flex gap-3 cursor-pointer">
                            <input
                                type="radio"
                                checked={runType === "range"}
                                onChange={() => setRunType("range")}
                            />
                            <div>
                                <h4>Run this ad between specific dates</h4>
                                <small>Select start and end date</small>
                            </div>
                        </label>
                    </div>

                    {/*  Date Picker */}
                    {runType === "range" && (
                        <div className="flex gap-3 mt-3">
                            <input
                                type="date"
                                value={startDate}
                                min={today}
                                onChange={(e) => {
                                    setStartDate(e.target.value);

                                    // reset end date if invalid
                                    if (endDate && e.target.value > endDate) {
                                        setEndDate("");
                                    }
                                }}
                                className="border p-2 rounded w-full"
                            />

                            <input
                                type="date"
                                value={endDate}
                                min={startDate || today}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border p-2 rounded w-full"
                            />
                        </div>
                    )}
                </div>

                {/*  Budget Section */}
                <div className="mb-3">
                    <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                        Daily budget
                    </h3>

                    {/* 📊 Impressions */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6 dark:border-gray-800 dark:bg-white/[0.03] xl:py-[27px]">
                        <h2 className="text-center">
                            Estimated{" "}
                            {calculateNumberInK(minImpressions)} -{" "}
                            {calculateNumberInK(maxImpressions)} impressions per day
                        </h2>
                    </div>

                    {/*  Dynamic Slider */}
                    <input
                        type="range"
                        min={Number(budgetData?.minimum_budget || 0)}
                        max={Number(budgetData?.maximum_budget || 100)}
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="slider w-full mt-4"
                    />

                    <p className="text-center mt-2 text-sm text-gray-500">
                        Budget: ${budget} / day
                    </p>
                </div>
            </div>
        </>
    )
}

export default Duration
