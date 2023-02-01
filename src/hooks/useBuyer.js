const { useState, useEffect } = require("react");

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://new-network-resale-server.vercel.app/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
