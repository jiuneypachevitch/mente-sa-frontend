interface ILoginStatus {
  isLogged: boolean;
}

type LoginStatusState = {
  isLogged: ILoginStatus;
}

type LoginStatusAction = {
  type: string
  status: ILoginStatus
}

type DispatchType = (args: LoginStatusAction) => LoginStatusAction;

