import { useReducer, useCallback } from "react";

type State = {
  status: "pending" | "completed";
  data: any;
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

function httpReducer(state: State, action: Action): State {
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

const INITIAL_STATE: State = { status: "pending", data: null, error: null };

function useHttp(requestFunction: (data: any) => Promise<any>) {
  const [httpState, dispatch] = useReducer(httpReducer, INITIAL_STATE);

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
