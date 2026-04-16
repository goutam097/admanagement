import { useEffect, useState } from "react";

interface AdCreativeType {
  headline: string;
  description: string;
  ad_format: string;
  button: string;
  website_url: string;
}

interface AdCreativeProps {
  adCreative: AdCreativeType;
  setAdCreative: React.Dispatch<React.SetStateAction<AdCreativeType>>;
}

const AdCreative: React.FC<AdCreativeProps> = ({
  adCreative,
  setAdCreative,
}) => {
  const [media, setMedia] = useState<File[]>([]);

  const buttonOptions = [
    { label: "Apply now", value: "apply_now" },
    { label: "Learn more", value: "learn_more" },
    { label: "Sign up", value: "sign_up" },
    { label: "Contact Us", value: "contact_us" },
    { label: "Shop Now", value: "shop_now" },
    { label: "Donate Now", value: "donate_now" },
  ];

  const adFormat = ["image", "video", "carousel", "collection"];

  // ✅ reset media on format change
  useEffect(() => {
    setMedia([]);
  }, [adCreative?.ad_format]);

  // ✅ handle upload
  const handleMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const format = adCreative.ad_format;

    const MAX_SIZE = 50 * 1024 * 1024;

    const isValid = fileArray.every((file) => file.size <= MAX_SIZE);
    if (!isValid) {
      alert("Max file size is 50MB");
      return;
    }

    if (format === "image" || format === "video") {
      if (fileArray.length !== 1) {
        alert("Only 1 file allowed");
        return;
      }
      setMedia(fileArray);
    } else {
      if (fileArray.length < 2 || fileArray.length > 5) {
        alert("Upload 2–5 files");
        return;
      }
      setMedia(fileArray);
    }
  };

  // ✅ remove file
  const removeFile = (index: number) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-4">
        <div className="px-6 py-5">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            Ad Creative
          </h3>
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">

          {/* Headline */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Headline
            </label>
            <input
              value={adCreative?.headline}
              onChange={(e) =>
                setAdCreative({ ...adCreative, headline: e.target.value })
              }
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
              type="text"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Description
            </label>
            <textarea
              value={adCreative?.description}
              onChange={(e) =>
                setAdCreative({ ...adCreative, description: e.target.value })
              }
              rows={3}
              className="w-full rounded-lg border px-4 py-2.5 text-sm"
            />
          </div>

          {/* Ad Format */}
          <div className="mb-3">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Ad Format
            </label>
            <select
              value={adCreative?.ad_format}
              onChange={(e) =>
                setAdCreative({ ...adCreative, ad_format: e.target.value })
              }
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
            >
              {adFormat.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Media */}
          <div className="mb-3">
            <label>
              Media {media.length}/
              {adCreative.ad_format === "image" && 'Media 0/1- Upload an image. Supported formats: JPG, PNG, GIF (Max 50MB)'}
              {adCreative.ad_format === "video" && 'Media 0/1- Upload a video or provide a video URL. Supported formats: MP4, WebM, MOV (Max 50MB)'}
              {(adCreative.ad_format === "carousel" || adCreative.ad_format === "collection") && 'Media 0/5- Upload multiple images or videos (2-5 files)'}
            </label>

            <div className="flex gap-4">

              {/* Upload Box (UNCHANGED DESIGN) */}
              <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 py-5 upload-box">
                <input
                  type="file"
                  multiple={
                    adCreative.ad_format === "carousel" ||
                    adCreative.ad_format === "collection"
                  }
                  accept={
                    adCreative.ad_format === "video"
                      ? "video/mp4,video/webm,video/mov"
                      : "image/jpeg,image/png,image/gif,video/mp4,video/webm,video/mov"
                  }
                  onChange={handleMedia}
                />

                <div className="dz-message flex flex-col items-center m-0!">
                  <div className="mb-[22px] flex justify-center">
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200">
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>

                  <span className="text-center text-sm">
                    Add Media
                  </span>
                </div>
              </div>

              {/* ✅ PREVIEW SIDE */}
              {media.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {media.map((file, index) => {
                    const url = URL.createObjectURL(file);
                    const isImage = file.type.startsWith("image");
                    const isVideo = file.type.startsWith("video");

                    return (
                      <div
                        key={index}
                        className="relative border rounded-lg p-2 w-[120px]"
                      >
                        {/* remove */}
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
                        >
                          ✕
                        </button>

                        {/* preview */}
                        {isImage && (
                          <img
                            src={url}
                            className="w-full h-[80px] object-cover rounded"
                          />
                        )}

                        {isVideo && (
                          <video
                            src={url}
                            className="w-full h-[80px] object-cover rounded"
                          />
                        )}

                        <p className="text-xs truncate mt-1">
                          {file.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="mb-3">
            <select
              value={adCreative?.button}
              onChange={(e) =>
                setAdCreative({ ...adCreative, button: e.target.value })
              }
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
            >
              {buttonOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* URL */}
          <div className="mb-3">
            <input
              value={adCreative.website_url}
              placeholder="https://example.com/your-page"
              onChange={(e) =>
                setAdCreative({
                  ...adCreative,
                  website_url: e.target.value,
                })
              }
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdCreative;