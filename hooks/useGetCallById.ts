import { useEffect, useState } from "react";
import { type Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    /***
     * WHY DID I JUST DECLARE A FUNCTION AND CALL IT ?
     * WELL, YOU CANNOT WRITE ASYNC/AWAIT CODE WITHIN USE EFFECT UNLESS U DECLARE IT AS A NEW FUNC */
    const loadCall = async () => {
      try {
        // https://getstream.io/video/docs/react/guides/querying-calls/#filters

        const { calls } = await client.queryCalls({
          filter_conditions: { 
          //  id 
          id: 'b6a781b7-192c-4559-baa9-694f5c14e32a'
          },
        });

        if (calls.length > 0) setCall(calls[0]);

        setIsCallLoading(false);
      } catch (error) {
        console.error(error);
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
