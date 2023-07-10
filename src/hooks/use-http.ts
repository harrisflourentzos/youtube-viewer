import { useReducer, useCallback } from "react";

type State =
  | {
      status: "pending";
    }
  | {
      data: any;
      status: "completed";
    }
  | { error: any; status: "completed" };

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
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

const INITIAL_STATE: State = { status: "pending" };

function useHttp(requestFunction: (data: any) => any) {
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
