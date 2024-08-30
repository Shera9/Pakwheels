import React, { useEffect, useState } from 'react';
import moment from 'moment';

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState(moment(timestamp).fromNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(moment(timestamp).fromNow());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [timestamp]);

  return (
    <span>{timeAgo}</span>
  );
};

export default TimeAgo;
