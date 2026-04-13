import { useEffect, useState } from "react";
import PopupModal from "../shared/ui/popupModal/PopupModal";
import AddLocation from "../addLocation/AddLocation";
import { ProfileTypeApi } from "../../apis/auth";


const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export interface Location {
    address: string | null,
    city: string | null,
    state: string | null,
    country: string | null,
    postal_code: string | null,
    latitude: number | null,
    longitude: number | null,
}

interface MembershipType {
    _id: string;
    title: string;
    slug: string;
    category: string[];
    is_disabled: boolean;
}

type AudienceProps = {
    onChange: (data: any) => void;
};

const Audience = ({ onChange }: AudienceProps) => {
    const [location, setLocation] = useState<Location>({
        address: null,
        city: null,
        state: null,
        country: null,
        postal_code: null,
        latitude: null,
        longitude: null
    });
    const [distance, setDistance] = useState<number>(0);
    const [startAge, setStartAge] = useState<number | "">("");
    const [endAge, setEndAge] = useState<number | "">("");
    const ages = Array.from({ length: 68 }, (_, i) => i + 13);
    const [gender, setGender] = useState("all");
    const [selectedType, setSelectedType] = useState<string>("");
    const [membershipTypeList, setMembershipTypeList] = useState<
        MembershipType[]
    >([]);
    const [profileTypeId, setProfileTypeId] = useState<string>("");
    const [category, setCategory] = useState<string[]>([]);
    const [membershipCategory, setMembershipCategory] = useState("");

    const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, title: "" });

    const openLocationModal = () => setIsModalOpen({ isOpen: true, title: "location" });
    const closeModal = () => setIsModalOpen({ isOpen: false, title: '' });

    const handleAddLocation = ({ location, distance }: { location: Location, distance: number }) => {
        setLocation(location);
        setDistance(distance);
        setIsModalOpen({ isOpen: false, title: '' });
    }

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = e.target.value;

        setSelectedType(selectedType);

        // ✅ reset dependent fields
        setProfileTypeId("");
        setCategory([]);
        setMembershipCategory("");

        try {
            const res = await ProfileTypeApi({ profile_type: selectedType });
            if (res) {
                setMembershipTypeList(res);
            }
        } catch (err) {
            console.log("API error");
        }
    };

    const changeProfileType = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const profileTypeId = ev.target.value;

        setProfileTypeId(profileTypeId);
        setMembershipCategory("");

        const details = membershipTypeList.find(
            (item: any) => item._id === profileTypeId
        );

        if (details) {
            setCategory(details.category || []);
        }
    };


    const onCategoryChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setMembershipCategory(ev.target.value);
    };

    useEffect(() => {
        onChange({
            location,
            distance,
            startAge,
            endAge,
            gender: "all",
            profileTypeId,
        });
    }, [location, distance, startAge, endAge, gender, profileTypeId]);





    return (
        <>
            <div className="px-6 py-5"><h3 className="text-base font-medium text-gray-800 dark:text-white/90">Audience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Who should see your ad?</p>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="mb-3">
                    <div><label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Location
                    </label>
                        <div className="relative">
                            <input
                                value={location?.address ?? ""}
                                readOnly
                                placeholder="Add address"
                                onClick={openLocationModal}
                                className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                type="text"
                            />
                            <button
                                type="button"
                                onClick={openLocationModal}
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            >
                                Add Address
                            </button>
                        </div>
                        {distance > 0 && (
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Radius: {distance} miles
                            </p>
                        )}
                    </div>

                    <PopupModal isOpen={isModalOpen.title == "location" ? isModalOpen.isOpen : false} onClose={closeModal} title="Change Location" className='modal-md'>
                        <AddLocation onSaveLocation={handleAddLocation} selectedLocation={location} selectedDistance={distance} />
                    </PopupModal>
                </div>

                <div className="grid grid-flow-col gap-4">

                    {/* Start Age */}
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Start Age <span>*</span>
                        </label>

                        <select
                            value={startAge}
                            onChange={(e) => {
                                setStartAge(Number(e.target.value));
                                setEndAge(""); // reset end age
                            }}
                            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                        >
                            <option value="">Select</option>

                            {ages.map((age) => (
                                <option key={age} value={age}>
                                    {age}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* End Age */}
                    <div className="mb-3">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            End Age <span>*</span>
                        </label>

                        <select
                            value={endAge}
                            onChange={(e) => setEndAge(Number(e.target.value))}
                            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                        >
                            <option value="">Select</option>

                            {ages
                                .filter((age) => !startAge || age >= startAge)
                                .map((age) => (
                                    <option key={age} value={age}>
                                        {age === 80 ? "80+" : age}
                                    </option>
                                ))}
                        </select>
                    </div>

                </div>

                <div className="mb-3">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Gender
                        </label>
                        <div className="flex flex-wrap items-center gap-8">
                            <label className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                <input
                                    name="gender"
                                    value="all"
                                    checked={gender === "all"}
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio" />All</label>
                            <label className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                <input name="gender"
                                    value="men"
                                    checked={gender === "men"}
                                    onChange={(e) => setGender(e.target.value)} type="radio" />

                                Men</label>
                            <label className="relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                <input name="gender"
                                    value="women"
                                    checked={gender === "women"}
                                    onChange={(e) => setGender(e.target.value)} type="radio" />Women</label>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Membership Type</label>
                        <div className="relative">
                            <select onChange={handleChange}
                                value={selectedType} className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 dark:bg-dark-900">
                                <option value="" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400" disabled>Select Membership Type</option>
                                <option value="free" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Regular Membership</option>
                                <option value="paid" className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">Premium Membership</option>
                            </select>

                        </div>
                    </div>

                    {
                        membershipTypeList?.length > 0 && (
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Select membership type</label>
                                <div className="relative">
                                    <select
                                        onChange={changeProfileType}
                                        value={profileTypeId}
                                        className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                                    >
                                        <option value="" disabled>Select membership type</option>

                                        {membershipTypeList.map(({ _id, slug, title }) => (
                                            <option key={_id} value={slug}>
                                                {title}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                        )
                    }

                    {/* {category.length > 0 && (
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Select Category
                            </label>

                            <select
                                value={membershipCategory}
                                onChange={onCategoryChange}
                                className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
                            >
                                <option value="">Select category</option>

                                {category
                                    .filter((item: string) => item?.toLowerCase().trim() !== "others")
                                    .map((item: string, index: number) => (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )} */}
                </div>

            </div>
        </>
    )
}

export default Audience
