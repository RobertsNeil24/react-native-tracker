import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionsAsync } from 'expo-location';

export default (callback) => {
  const [err, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback
      );
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};