import { useApp } from "../../contexts/AppContext";

import Toggle from "../../components/form/Toggle";

const AccountPreferences = () => {
    const { darkMode, setDarkMode } = useApp();

    return (
        <div className="p-5 border border-gray-300 rounded-3xl">
            <h2 className="mb-8 font-semibold text-[24px] text-center">Preferences</h2>
            <div className="mb-3 text-[14px]">
                <p className="mb-4 text-center text-[16px] text-gray-700 dark:text-white">{darkMode ? "Dark mode" : "Light mode"}</p>
                <div className="flex justify-center">
                    <Toggle isToggled={darkMode} handleToggle={() => setDarkMode(!darkMode)} />
                </div>
            </div>
        </div>
    );
};

export default AccountPreferences;
