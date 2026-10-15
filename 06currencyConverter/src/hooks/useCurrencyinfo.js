import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        if (!currency) return;
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`API request failed: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                setData(res[currency] || {});
            })
            .catch((error) => {
                console.error("Currency API error:", error);
                setData({});
            });
    }, [currency]);
    return data;
}

export default useCurrencyInfo;