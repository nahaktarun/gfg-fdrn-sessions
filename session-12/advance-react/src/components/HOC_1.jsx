import { useEffect, useState } from "react";

const withAuthentication = (BaseComponent) => {
  return function WithAuthComponent({ isAuthenticated, ...props }) {
    if (!isAuthenticated) {
      return (
        <div>
          <strong>Access Denied</strong>
        </div>
      );
    }
    return <BaseComponent {...props} />;
  };
};

function UserInformation({ user }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mx-auto mt-2 max-w-sm">
      <div className="space-y-2">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

const AuthenticatedUserComponent = withAuthentication(UserInformation);
function HOC_1() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const user = {
    name: "Alex",
    email: "alex@gmail.com",
    role: "developer",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* 1. what is HOC? */}
      {/* 2.why we need HOC? -> to have additional functionality of existing component without changing the component -> create a new component without changing the actual once.  */}
      {/* userPageComponent -> userAuthComponent(userPageComponent) -> new component with authentication. */}
      <div className="w-full">
        <div>
          <AuthenticatedUserComponent
            user={user}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </div>
    </div>
  );
}

export default HOC_1;
