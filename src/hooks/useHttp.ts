import { useReducer, useCallback } from "react";

type State<T> = {
  status: "pending" | "completed";
  data: T | null;
  error: any;
};

type Action =
  | {
      type: "SEND";
    }
  | {
      type: "SUCCESS";
      responseData: any;
    }
  | {
      type: "ERROR";
      errorMessage: any;
    };

function httpReducer<T>(state: State<T>, action: Action): State<T> {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.responseData,
      error: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }

  return state;
}

function useHttp<T>(requestFunction: (requestData: any) => Promise<T>) {
  const [httpState, dispatch] = useReducer(httpReducer<T>, {
    status: "pending",
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData: any) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error: any) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
