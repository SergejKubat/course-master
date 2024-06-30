import dayjs from "dayjs";

export const formatDate = (dateString?: string | null): string => {
    return (dateString && dayjs(dateString).format("DD/MM/YYYY")) || "";
};

export const formatDateTime = (dateString?: string | null): string => {
    if (dateString) {
        if (dateString === "0001-01-01T00:00:00") return "None";

        return dayjs(dateString).format("DD/MM/YY HH:mm:ss");
    }

    return "";
};
