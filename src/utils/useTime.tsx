import { useState, useEffect } from "react";

export function useTime() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // Refresh tame based component every half second.
    setTimeout(() => setTime(Date.now()), 500);
  }, [time]);

  return time;
}
