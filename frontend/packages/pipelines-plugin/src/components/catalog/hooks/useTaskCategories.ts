import * as React from 'react';
import { coFetch } from '@console/internal/co-fetch';
import { TEKTON_HUB_API_ENDPOINT } from '../const';

const useTaskCategories = () => {
  const [tektonHubCategories, setTektonHubCategories] = React.useState<any>([]); // Tektonhub categories
  const [loaded, setLoaded] = React.useState(false);
  const [loadedError, setLoadedError] = React.useState<string>();

  React.useEffect(() => {
    let mounted = true;
    coFetch(`${TEKTON_HUB_API_ENDPOINT}/categories`)
      .then(async (res) => {
        const json = await res.json();
        if (mounted) {
          setLoaded(true);
          setTektonHubCategories(json.data);
        }
      })
      .catch((err) => {
        setLoaded(true);
        if (mounted) setLoadedError(err?.message);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return [tektonHubCategories, loaded, loadedError];
};

export default useTaskCategories;
