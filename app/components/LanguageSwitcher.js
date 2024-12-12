"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLocale = (locale) => {
    if (locale === 'en') {
      router.push('/');
    } else {
      router.push('/es');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white"
        onClick={() => changeLocale("es")}
      >
        ES
      </button>
    </div>
  );
}
